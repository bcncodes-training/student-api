"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("./middleware/auth.js.js");

var _index = _interopRequireDefault(require("./controllers/student/index.js.js"));

var _index2 = _interopRequireDefault(require("./controllers/user/index.js.js"));

var _errorHandler = _interopRequireDefault(require("./middleware/error-handler.js.js"));

var app = (0, _express["default"])();
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use('/user', _index2["default"]);
app.use('/student', _auth.authJwt, _index["default"]);
app.use(_errorHandler["default"].logError);
app.use(_errorHandler["default"].clientErrorHandler);
app.use(_errorHandler["default"].errorHandler);
var _default = app;
exports["default"] = _default;