"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ensureAuthenticated = _interopRequireDefault(require("../../../middlewares/ensureAuthenticated"));

var _express = require("express");

var _RoomDialogController = _interopRequireDefault(require("../controllers/RoomDialogController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const roomDialogController = new _RoomDialogController.default();
const roomDialogRouter = (0, _express.Router)();
roomDialogRouter.get('/', _ensureAuthenticated.default, roomDialogController.find).post('/', _ensureAuthenticated.default, roomDialogController.create);
var _default = roomDialogRouter;
exports.default = _default;