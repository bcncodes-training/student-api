"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("./login.js"));

var _register = _interopRequireDefault(require("./register.js"));

var _auth = require("../../middleware/auth.js");

var router = (0, _express["default"])();
router.post('/login', _auth.authLocal, _login["default"]);
router.post('/register', _register["default"]);
var _default = router;
exports["default"] = _default;