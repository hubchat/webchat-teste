"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _youch = _interopRequireDefault(require("youch"));

var _AppError = _interopRequireDefault(require("./AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  if (!process.env.PROD) {
    const errors = await new _youch.default(err, request).toJSON();
    return response.status(500).json(errors);
  }

  return response.status(500).json({
    message: 'An error has occurred'
  });
};

exports.default = _default;