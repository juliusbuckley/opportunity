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
  'react-hot-loader/patch',
 './index.js'],
  output: {
    path: path.join(__dirname, 'www/src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  node: {
    __dirname: true
  },
  watch: true,
  target: 'web',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
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
