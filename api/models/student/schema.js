"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var Schema = _mongoose["default"].Schema;
var studentSchema = new Schema({
  //_id: Schema.ObjectId,
  name: String,
  password: String,
  age: Number,
  projects: [{
    type: Schema.ObjectId,
    ref: 'Project'
  }]
});
/* studentSchema.pre('save', function() {
  this.name = this.name.toUpperCase();
  this.password = Buffer.from(this.password,'base64');
  //console.log(this.name)
});
 */

studentSchema.pre('save', function (next) {
  var user = this;

  if (this.isModified('password') || this.isNew) {
    _bcrypt["default"].genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }

      _bcrypt["default"].hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
var _default = studentSchema;
exports["default"] = _default;