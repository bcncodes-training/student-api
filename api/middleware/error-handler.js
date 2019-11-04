"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _statuses = _interopRequireDefault(require("statuses"));

var _default = {
  logError: function logError(err, req, res, next) {
    req.error = err;
    console.log(err);
    next(err);
  },
  clientErrorHandler: function clientErrorHandler(err, req, res, next) {
    if (err instanceof _httpErrors["default"].HttpError) res.status(err.statusCode).send(err.message);
    next(err);
  },
  errorHandler: function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(500).send('se ha producido un error: ', err.type);
  }
};
exports["default"] = _default;