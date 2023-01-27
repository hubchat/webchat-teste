"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ensureAuthenticated = _interopRequireDefault(require("../../../middlewares/ensureAuthenticated"));

var _express = require("express");

var _RoomController = _interopRequireDefault(require("../controllers/RoomController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const roomController = new _RoomController.default();
const roomRouter = (0, _express.Router)();
roomRouter.get('/', _ensureAuthenticated.default, roomController.find).get('/:id', _ensureAuthenticated.default, roomController.finById).post('/', _ensureAuthenticated.default, roomController.create).put('/:id', _ensureAuthenticated.default, roomController.update).delete('/:id', _ensureAuthenticated.default, roomController.delete);
var _default = roomRouter;
exports.default = _default;