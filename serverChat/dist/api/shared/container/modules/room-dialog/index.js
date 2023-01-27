"use strict";

var _RoomDialogRepository = _interopRequireDefault(require("../../../../modules/room-dialog/repositories/RoomDialogRepository"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('RoomDialogRepository', _RoomDialogRepository.default);