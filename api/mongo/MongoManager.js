"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

//import config from '../config/config.js';
var MongoManager =
/*#__PURE__*/
function () {
  // _config;
  function MongoManager(url_mongo) {
    this._config = url_mongo;
  }

  var _proto = MongoManager.prototype;

  _proto.getConnectionURL = function getConnectionURL() {
    return this._config;
  };

  _proto.isConnected = function isConnected() {
    _mongoose["default"].connection.on('connected', function (_) {
      return true;
    });
  };

  _proto.connect = function connect() {
    return _mongoose["default"].connect(this.getConnectionURL(), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  };

  _proto.disconnect = function disconnect() {
    _mongoose["default"].disconnect();
  };

  return MongoManager;
}();

var _default = new MongoManager(process.env.MONGODB_URI);

exports["default"] = _default;