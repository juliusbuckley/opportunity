exports.id = 0;
exports.modules = {

/***/ "./webpack.config.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__("path");
var webpack = __webpack_require__("webpack");
const nodeExternals = __webpack_require__("webpack-node-externals")
const StartServerPlugin = __webpack_require__("start-server-webpack-plugin")
module.exports = {
  context: path.join(__dirname),
  entry: ['webpack/hot/poll?1000','./server'],
  output: {
    path: path.join(__dirname,'www'),
    filename: 'bundle.js',

  },
  watch: true,
  target: 'node',
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
        }),
  ]

}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

};