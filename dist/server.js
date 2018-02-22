'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();
var app = require('./server-config');

var server = _http2.default.createServer(app);
var currentApp = app;
server.listen(3000);
console.log('listening on port 3000');
// check if HMR is enabled

if (module.hot) {
  module.hot.accept('./server', function () {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}