"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _create = _interopRequireDefault(require("./create.js"));

var _update = _interopRequireDefault(require("./update.js"));

var _remove = _interopRequireDefault(require("./remove.js"));

var _list = _interopRequireDefault(require("./list.js"));

var _listOne = _interopRequireDefault(require("./listOne.js"));

var _removeProjects = _interopRequireDefault(require("./removeProjects.js"));

var router = (0, _express["default"])();
router.route('/').post(_create["default"]).get(_list["default"]);
router.route('/:id').get(_listOne["default"]).put(_update["default"])["delete"](_remove["default"]);
router.route('/:id/projects')["delete"](_removeProjects["default"]);
var _default = router;
exports["default"] = _default;