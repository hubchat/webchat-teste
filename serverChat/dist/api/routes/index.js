"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _roomDialog = _interopRequireDefault(require("../modules/room-dialog/routes/room-dialog.routes"));

var _room = _interopRequireDefault(require("../modules/room/routes/room.routes"));

var _session = _interopRequireDefault(require("../modules/session/routes/session.routes"));

var _user = _interopRequireDefault(require("../modules/user/routes/user.routes"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.get('/', (req, res) => res.json({
  message: 'API-HUBCHAT',
  version: 1.0
}));
routes.use('/user', _user.default);
routes.use('/session', _session.default);
routes.use('/room', _room.default);
routes.use('/room-dialog', _roomDialog.default);
var _default = routes;
exports.default = _default;