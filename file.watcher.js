/*
* Indexer watch
*/

const gaze = require('gaze');
const path = require('path');
const config = require('config');
const engine = require('./file.indexer.js');

const pattern = [];

config.server.mount.forEach(path => {
    Object.keys(path).forEach(key =>{
        if (typeof(path[key]) === "string") {
            pattern.push(path[key].replace('./',''))
        } else {
            Object.keys(path[key]).forEach(inner => {
                pattern.push(path[key][inner].replace('./',''));
            })
        } 
    });

});

// monitor
gaze(pattern, { cwd: path.resolve(__dirname) }, function () {
    
    engine.index();

    this.on('added', async function (event, filepath) {
        await engine.index();
    });
    this.on('deleted',async function (event,filepath) {
        await engine.index();
    });
})