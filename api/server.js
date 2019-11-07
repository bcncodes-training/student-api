"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app.js"));

//import https from 'https';
//import fs from 'fs';

/* https.createServer({
    key: fs.readFileSync( './config/server.key'),
    cert: fs.readFileSync( './config/server.cert')
}, app)
 */
_http["default"].createServer(_app["default"]).listen(process.env.PORT
/* , _=> {
console.log('Example app listening on port 8443! Go to https://localhost:8443/') } */
);