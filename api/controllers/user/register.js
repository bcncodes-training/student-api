"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dao = _interopRequireDefault(require("../../models/user/dao.js"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var register =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (req.body.user.name) {
              _context.next = 5;
              break;
            }

            next((0, _httpErrors["default"])(400, {
              message: 'name is needed'
            }));
            _context.next = 9;
            break;

          case 5:
            _context.next = 7;
            return _dao["default"].create(Object.assign({}, req.body.user));

          case 7:
            user = _context.sent;
            res.send(user);

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function register(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = register;
exports["default"] = _default;