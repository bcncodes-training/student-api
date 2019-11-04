"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var projectSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  title: String,
  unit: String
});
var _default = projectSchema;
exports["default"] = _default;