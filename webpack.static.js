const path = require("path");
const base = require("./webpack.base.js");

module.exports = {
    ...base,
    mode: 'production',
    target: 'web',
    watch: false,
    entry: {
        'public/loanfazz': path.resolve(process.cwd(),'static-files','index.ts')
    },
    externals: []
}
