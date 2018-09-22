const fs = require("fs");
const glob = require('glob');
const path = require("path");
const base = require("./webpack.base.js");

module.exports = {
    ...base,
    mode: 'development',
    target: 'node',
    watch: false,
    entry: [ ...glob.sync('./test/**/*.spec.ts'), ...glob.sync('./src/**/*.spec.ts')],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(process.cwd(), '.tmp')
    }
}
