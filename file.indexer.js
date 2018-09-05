/*
* Indexer engine
*/

const fs = require("fs");
const glob = require('glob');
const path = require("path");
const config = require('config');

const context = "src";


const asyncForEach = async function(array,callback) {
  for(let index = 0 ; index < array.length ; index++) {
      await callback(array[index],index,array);
  }
};

const getParent = (_path) => {
    let base = path.relative(path.resolve(__dirname,`./${context}`),_path);
    base = base.substr(0,base.lastIndexOf('/'));
    _path = path.resolve(__dirname, _path);
    let _parent = path.resolve(__dirname,`./${context}`,base);
    // cut the ** path
    let patternPos = _parent.indexOf("**");
    if (patternPos > -1) {
      _parent = _parent.substr(0,patternPos);
    }
    return _parent;
}

const reformat = (result,base) => {
    base = `./${base}`;
    let reformatted = [];
    result.forEach(x => {
      if (base !== undefined) {
        reformatted.push(`export * from '${path.relative(base,x.replace('.ts',''))}';`);
      } else {
        reformatted.push(`export * from '${x.replace('.ts','')}';`);
      }
    });
    return reformatted.join('\n');
};

function writer(){
    let first = true;
    let self = this;
    return {
      write: (_path,data) => {
        if (data == undefined || data === "" || data === null || data.length === 0) {
            fs.writeFileSync(_path,"export default {}");
        } else {
          if (first) {
            fs.writeFileSync(_path,data);
            self.first = false;
          }
          else {
            fs.appendFileSync(_path,data);
          }
        }
      }
    }
}


const extract = async (_path,_basePath) => {
  
  return new Promise((resolve,reject) => {
    const startFrom = _basePath.lastIndexOf(context)+context.length+1;
    const take = (_basePath[_basePath.length-1] == '/' ? _basePath.length - 1 : _basePath.length) - startFrom;
    const basePath = _basePath.substr(startFrom,take);
    glob(_path,
      {
        debug: false,
        dot:true,
        matchBase:true
      }, (err, files) => {
          if(err === null) {
            let temp = [];
            files.map(_ => {
              formatted = _.substr(_.indexOf(context)+context.length+1);
              if (formatted !== `${basePath}/index.ts` ){
                temp.push(_);
              }
            });
            resolve(temp);
          } else {
            reject(err);
          }
    });
  });
};

const cutPathBetweenSrcAndAsteriks = (_path) => {
  const currentPath = _path;
  const firstLocation = currentPath.indexOf('src/')+4;
  const nextLocation = currentPath.indexOf("/*");
  return currentPath.substr(
      firstLocation,
      nextLocation - firstLocation
  );
}

const indexChunk = () => {

  // index files to webpack chunck  

  let buffer = "";
  const _exports = [];
  const _endpoints = [];
  for ( let i = 0 ; i < config.server.mount.length ; i++) {
      const _path = config.server.mount[i];
      Object.keys(_path).forEach(key => {
          if (key === "endpoints") {
              const endpoints = Object.keys(_path["endpoints"]);
              endpoints.forEach((inner,i) => {
                  const endpoint_name = inner.replace(/\//g,"_");
                  buffer += `import * as ${endpoint_name} from "./${context}/${cutPathBetweenSrcAndAsteriks(_path[key][inner])}";\n`;
                  _endpoints.push(`{${endpoint_name}:${endpoint_name}}`);
              });
          } else {
              buffer += `import * as ${key} from "./${context}/${cutPathBetweenSrcAndAsteriks(_path[key])}";\n`;
              _exports.push(`{${key}:${key}}`); 
          }
      });
  }
  buffer += `export default [{endpoints:[${_endpoints.join(',')}]}, ${_exports.join(",")}]`;
  let _w = new writer();
  _w.write(path.resolve(process.cwd(),"webpack.chunk.index.js"),buffer);
};

const engine = {
  index: async () => {
    await asyncForEach(config.server.mount,async x => {
      const _path = Object.keys(x).map(key=>x[key])[0];
      let _w = new writer();
      if (typeof(_path) === "string") {
        const parent = getParent(_path);
        const result = reformat(await extract(_path,parent),context);
        _w.write(path.resolve(parent,'index.ts'),result);
      } else {
        await asyncForEach(Object.keys(_path),async (item) => {
          const actual_path = _path[item]; 
          const parent = getParent(actual_path);
          const result = reformat(await extract(actual_path,parent),context);
          _w.write(path.resolve(parent,'index.ts'),result);
        })
      }
    });

    await asyncForEach(config.database.entities,async (_path) => {
      const parent = getParent(_path);
      const result = reformat(await extract(_path,parent),context);
      let _w = new writer();
      _w.write(path.resolve(parent,'index.ts'),result);
    });
    indexChunk();
  }
};

module.exports = exports = engine;

if (process.argv[2] === 'run') {
  engine.index().catch(err => {
    console.error(err);
    process.exit(1);
  });;
}
