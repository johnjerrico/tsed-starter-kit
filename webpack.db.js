const fs = require("fs");
const glob = require('glob');
const config = require('config');
const path = require("path");
const base = require("./webpack.base.js");


let indexEntries = {};

let files = glob.sync(config.database.migrations,{debug: false,dot:true,matchBase:true});

for (let i = 0 ; i < files.length ; i++ ) {
    let file = files[i];
    let lastIndexOfSlash = file.lastIndexOf('/')+1;
    let filename = file.substr(lastIndexOfSlash,file.length-lastIndexOfSlash-3);
    indexEntries[`migrations/${filename}`] = path.resolve(process.cwd(),file);
}

module.exports = {
    ...base,
    optimization: {
        minimize: false
    },
    mode: 'production',
    target: 'node',
    watch: false,
    entry: indexEntries,
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(process.cwd(), '.tmp')
    }
}
