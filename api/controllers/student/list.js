"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dao = _interopRequireDefault(require("../../models/student/dao.js"));

var list =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var students, projectsCount, students_number;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.time('list');
            _context.next = 4;
            return _dao["default"].list();

          case 4:
            students = _context.sent;
            console.timeEnd('list'); //Ejercicio 22: Contar alumnos o proyectos; 
            //si el parámetro count es true envía núm de estudiantes sino el array de estudiantes.      

            if (req.query['count'] == 'true') {
              if (req.query['projects'] == 'true') {
                projectsCount = students.map(function (doc) {
                  return doc.projects.length;
                }).reduce(function (a, c) {
                  return a + c || 0;
                }, 0);
                students.push({
                  projects_number: projectsCount
                });
              }

              if (req.query['student'] == 'true') {
                students_number = students.length - 1;
                students.push({
                  students_number: students_number
                });
              }
            }

            res.json(students);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function list(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = list;
exports["default"] = _default;