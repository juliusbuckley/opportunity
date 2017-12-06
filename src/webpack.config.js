var path = require('path');
var webpack = require('webpack');
var nodeModules = {};
var fs = require('fs')
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;

  });
const StartServerPlugin = require('start-server-webpack-plugin')
module.exports = {
  context: path.join(__dirname),
  entry: ['webpack/hot/poll?1000','./server'],
  output: {
    path: path.join(__dirname,'www'),
    filename: 'bundle.js'
  },
  watch: true,
  target: 'node',
  externals: [nodeModules],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins:[
        new StartServerPlugin('bundle.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        })
  ]

}
