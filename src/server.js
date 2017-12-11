import http from 'http'
require('dotenv').config()
const app = require('./server-config')

const server = http.createServer(app)
let currentApp = app
server.listen(3000)
console.log('listening on port 3000')
// check if HMR is enabled

if (module.hot) {
 module.hot.accept('./server', () => {
  server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
 })
}
