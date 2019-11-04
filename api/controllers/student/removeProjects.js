"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dao = _interopRequireDefault(require("../../models/student/dao.js"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var removeProjects =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var student;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.params.id);

            if (req.params.id) {
              _context.next = 6;
              break;
            }

            next((0, _httpErrors["default"])(404));
            _context.next = 10;
            break;

          case 6:
            _context.next = 8;
            return _dao["default"].update(req.params.id, {
              projects: []
            });

          case 8:
            student = _context.sent;
            res.json(student);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function removeProjects(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = removeProjects;
exports["default"] = _default;