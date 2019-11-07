"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAccessToken = exports.authJwt = exports.authLocal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _passportHttpBearer = _interopRequireDefault(require("passport-http-bearer"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dao = _interopRequireDefault(require("../models/user/dao.js"));

//import config from '../config/config.js';
var generateAccessToken = function generateAccessToken(user) {
  return _jsonwebtoken["default"].sign({
    id: user._id
  }, process.env.SECRET_TOKEN, {
    expiresIn: 2592000
  });
};

exports.generateAccessToken = generateAccessToken;
var localStrategy = new _passportLocal["default"](
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(username, password, done) {
    var error, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            error = (0, _httpErrors["default"])(401, {
              message: 'Incorrect username or password.'
            });
            _context.prev = 1;
            _context.next = 4;
            return _dao["default"].checkUser({
              name: username
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", done(error, false));

          case 7:
            _context.next = 9;
            return _bcrypt["default"].compare(password, user.password);

          case 9:
            if (_context.sent) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", done(error, false));

          case 11:
            return _context.abrupt("return", done(null, user));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", done(_context.t0, false));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var bearerStrategy = new _passportHttpBearer["default"](
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(token, done) {
    var payload, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _jsonwebtoken["default"].verify(token, process.env.SECRET_TOKEN);

          case 3:
            payload = _context2.sent;
            _context2.next = 6;
            return _dao["default"].listOne(payload.id);

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", done(null, false));

          case 9:
            return _context2.abrupt("return", done(null, user));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", done(_context2.t0, false));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());

_passport["default"].use(localStrategy);

_passport["default"].use(bearerStrategy);

var authLocal = _passport["default"].authenticate('local', {
  session: false
});

exports.authLocal = authLocal;

var authJwt = _passport["default"].authenticate('bearer', {
  session: false
});

exports.authJwt = authJwt;