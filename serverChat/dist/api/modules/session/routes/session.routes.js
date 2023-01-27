"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _SessionController = _interopRequireDefault(require("../controllers/SessionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionController = new _SessionController.default();
const sessionRouter = (0, _express.Router)();
sessionRouter.post('/', sessionController.create);
var _default = sessionRouter;
exports.default = _default;