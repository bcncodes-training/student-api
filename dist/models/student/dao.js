"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("./model.js"));

var _MongoManager = _interopRequireDefault(require("../../mongo/MongoManager.js"));

//import mongoose from 'mongoose';
var studentDAO =
/*#__PURE__*/
function () {
  function studentDAO() {
    _MongoManager["default"].connect();
  }

  var _proto = studentDAO.prototype;

  _proto.create = function create(data) {
    var student = new _model["default"](data);
    return student.save();
  };

  _proto.list = function list() {
    return _model["default"].find().populate('projects').lean();
  };

  _proto.checkUser = function checkUser(data) {
    return _model["default"].findOne(data).populate('projects').exec();
  };

  _proto.listOne = function listOne(id) {
    return _model["default"].findById(id).populate('projects').exec();
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

  return studentDAO;
}();

var _default = new studentDAO();

exports["default"] = _default;