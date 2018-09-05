const path = require("path");
const config = require("config");
const base = require("./webpack.base.js");
const webpack = require("webpack");
const WebpackShellPlugin = require("webpack-shell-plugin");

const entities = config.database.entities.map(
    x => path.resolve(__dirname,x.substr(0,x.lastIndexOf('/')),'index.ts')
);

module.exports = [ 
    {
        ...base,
        mode: 'development',
        target: 'node',
        entry: {
            'main': path.resolve(process.cwd(),'src','index.ts')
        },
        devtool: 'inline-source-map',
        watch: true,
        watchOptions: {
            ignored: [
                path.resolve(__dirname,"dist"),
                path.resolve(__dirname,"seeders"),
                path.resolve(__dirname,"static-files"),
                path.resolve(__dirname,"migrations"),
                path.resolve(__dirname,"node_modules"),
                path.resolve(__dirname,"src","routes","index.ts"),
                path.resolve(__dirname,"middlewares","index.ts"),
                path.resolve(__dirname,"services","index.ts"),
                path.resolve(__dirname,"filters","index.ts"),
                ...entities
            ]
        },
        resolve: {
            ...base.resolve,
            modules: [ ...base.resolve.modules, path.resolve(process.cwd(), "src")]
        },
        plugins: [
            ...base.plugins, 
            new WebpackShellPlugin(
                {
                    dev: true,
                    onBuildStart: ['node ./file.watcher.js']
                }
            ),
            new WebpackShellPlugin(
                {
                    dev: true,
                    onBuildEnd: ['node_modules/.bin/nodemon ./dist/main.bundle.js --watch']
                }
            ),
            new webpack.DefinePlugin({
                "static_path": `'${path.resolve(process.cwd(),'dist','public')}'`
            })
        ]
    }
];
