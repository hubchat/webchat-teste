"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ensureAuthenticated = _interopRequireDefault(require("../../../middlewares/ensureAuthenticated"));

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userController = new _UserController.default();
const userRouter = (0, _express.Router)();
userRouter.get('/', _ensureAuthenticated.default, userController.finById).post('/', userController.create).put('/', _ensureAuthenticated.default, userController.update).delete('/', _ensureAuthenticated.default, userController.delete);
var _default = userRouter;
exports.default = _default;