"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app.js"));

var _fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _url = require("url");

//var _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url));

_http["default"].createServer(/* {
  key: _fs["default"].readFileSync("".concat(__dirname, "//config//server.key")),
  cert: _fs["default"].readFileSync("".concat(__dirname, "//config//server.cert"))
}, */ _app["default"]).listen(process.env.PORT);
