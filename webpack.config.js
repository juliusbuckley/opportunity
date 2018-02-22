var path = require('path');
var webpack = require('webpack');
var nodeModules = {};
var Dotenv = require('dotenv-webpack')
var fs = require('fs')
require('dotenv').config()


fs.readdirSync('node_modules').
filter(function(xo) {
    return ['.bin'].indexOf(xo) === -1;
  }).
  forEach(function(mod) {
    nodeModules[mod] = `commonjs ${mod}`;

  });


const StartServerPlugin = require('start-server-webpack-plugin')
module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    // 'webpack/hot/poll?1000',
  //  './src/server',
 './index.js'],
  output: {
    path: path.join(__dirname, 'www/src'),
    filename: 'bundle.js'
  },
  node: {
    __dirname: true
  },
  watch: true,
  target: 'node',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015',
         'react']
      }
    }]
  },
  resolve: {
    modules: [
      path.join('./node_modules')
    ]
  },
  plugins: [
    new StartServerPlugin('bundle.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': JSON.stringify('server'),
        'NODE_ENV': "'production'"
      }
    }),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ]

}
