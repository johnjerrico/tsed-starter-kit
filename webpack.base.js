const path = require('path');
const root = process.cwd();
const config = require('config');
const dist = path.resolve(root, 'dist');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {

    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: dist
    },
    
    node:{
      process: true,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    },

    externals: [
      nodeExternals()
    ],

    resolve: {
      alias:  {
        "webpack.chunk.index": path.resolve(__dirname,'webpack.chunk.index.js')
      },
      extensions: [ '.tsx', '.ts', '.js' ],
      modules: ["node_modules"]
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new CopyWebpackPlugin(
        [
          { "from": "static-files", "to":"public"},
        ],{
          "ignore": ["**/*.ts", "**/*.js"]
        }
      )
    ],
    
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          exclude: [
            /node_modules/,
            /seeders/,
            /migrations/
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                  presets: [
                    ["env", 
                      {
                        "targets": {
                          "node": "10"
                        },
                        "ignore": [
                          "node_modules"
                        ]
                       }
                    ]
                  ],
                  plugins:[
                    "transform-runtime",
                    "transform-async-to-generator",
                    "transform-class-properties",
                    "transform-object-rest-spread"
                  ]
              }
            },
            {
              loader: "awesome-typescript-loader",
              options:{
                "useCache": false,
                "transpileOnly": false,
                "configFileName":'./tsconfig.json'
                //forceIsolatedModules: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          exclude: [
            /node_modules/,
            /seeders/,
            /migrations/
          ],
          loader: 'babel-loader',
          options: {
              presets: [
                ["env", 
                  {
                    "targets": {
                      "node": "10"
                    },
                    "ignore": [
                      "node_modules"
                    ]
                  }
                ]
              ],
              plugins:[
                "transform-runtime",
                "transform-async-to-generator",
                "transform-class-properties",
                "transform-object-rest-spread"
              ]
          }
        }
      ]
    }
};