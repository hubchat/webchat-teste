"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = _interopRequireDefault(require("./error/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.default('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = (0, _jsonwebtoken.verify)(token, String(process.env.TOKEN));
    const {
      sub,
      name,
      email
    } = decoded;
    request.user = {
      id: sub,
      name,
      email
    };
    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}