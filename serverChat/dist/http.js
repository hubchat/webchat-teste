"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverHttp = exports.io = void 0;

require("reflect-metadata");

require("dotenv/config");

require("express-async-errors");

require("./api/shared/container");

require("./api/database");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _helmet = _interopRequireDefault(require("helmet"));

var _http = _interopRequireDefault(require("http"));

var _socket = require("socket.io");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _error = _interopRequireDefault(require("./api/middlewares/error/error"));

var _routes = _interopRequireDefault(require("./api/routes"));

var _swagger = _interopRequireDefault(require("./api/swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const limiter = (0, _expressRateLimit.default)({
  windowMs: 15 * 60 * 1000,
  max: 5000
});
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_express.default.json());
app.use(limiter);
app.use('/api/v1', _routes.default);
app.use(_error.default);

const serverHttp = _http.default.createServer(app);

exports.serverHttp = serverHttp;
const io = new _socket.Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'POST', 'DELETE'],
    allowedHeaders: ['Authorization']
  }
});
exports.io = io;