const config = require('config');
const path = require('path');
const base = require('./webpack.base.js');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = [
    {
        ...base,
        optimization: {
            minimize: false
        },
        mode: 'production',
        target: 'node',
        entry: {
            'main': path.resolve(process.cwd(),'src','index.ts')
        },
        resolve: {
            ...base.resolve,
            modules: [ ...base.resolve.modules, path.resolve(process.cwd(), 'src')]
        },
        plugins: [
            ...base.plugins,
            new WebpackShellPlugin(
                {
                    onBuildStart: [
                        'node ./file.indexer.js run'
                    ]
                }
            ),
            new webpack.DefinePlugin({
                "static_path": `'./public'`
            })
        ]
    }
];
