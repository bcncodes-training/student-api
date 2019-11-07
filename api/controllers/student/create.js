"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dao = _interopRequireDefault(require("../../models/student/dao.js"));

var _dao2 = _interopRequireDefault(require("../../models/project/dao.js"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var create =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var arrId, student;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (req.body.projects) {
              _context2.next = 5;
              break;
            }

            next((0, _httpErrors["default"])(400, {
              message: 'projects not found'
            }));
            _context2.next = 14;
            break;

          case 5:
            arrId = [];
            _context2.next = 8;
            return Promise.all(req.body.projects.map(
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(element) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.t0 = arrId;
                        _context.next = 4;
                        return _dao2["default"].create(element);

                      case 4:
                        _context.t1 = _context.sent._id;
                        _context.t2 = {
                          "_id": _context.t1
                        };

                        _context.t0.push.call(_context.t0, _context.t2);

                        _context.next = 12;
                        break;

                      case 9:
                        _context.prev = 9;
                        _context.t3 = _context["catch"](0);
                        next(_context.t3);

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 9]]);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 8:
            console.time('create'); //            const student = await studentDAO.create(Object.assign({},{name:req.body.name, projects: arrId}));    

            _context2.next = 11;
            return _dao["default"].create(Object.assign({}, req.body, {
              projects: arrId
            }));

          case 11:
            student = _context2.sent;
            console.timeEnd('create');
            res.send(student);

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = create;
exports["default"] = _default;