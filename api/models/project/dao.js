"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("./model.js"));

var _MongoManager = _interopRequireDefault(require("../../mongo/MongoManager.js"));

var projectDAO =
/*#__PURE__*/
function () {
  function projectDAO() {
    _MongoManager["default"].connect();
  }

  var _proto = projectDAO.prototype;

  _proto.create = function create(data) {
    var project = new _model["default"]();
    Object.assign(project, data);
    return project.save();
  };

  _proto.list = function list() {
    return _model["default"].find().exec();
  };

  _proto.listOne = function listOne(id) {
    return _model["default"].findById(id).exec();
  };

  _proto.update = function update(id, data) {
    return _model["default"].findByIdAndUpdate(id, data, {
      "new": true,
      useFindAndModify: false
    }).exec();
  };

  _proto.remove = function remove(id) {
    return _model["default"].findByIdAndRemove(id, {
      useFindAndModify: false
    }).exec();
  };

  return projectDAO;
}();

var _default = new projectDAO();

exports["default"] = _default;