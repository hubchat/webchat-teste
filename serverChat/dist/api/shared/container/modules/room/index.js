"use strict";

var _RoomRepository = _interopRequireDefault(require("../../../../modules/room/repositories/RoomRepository"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('RoomRepository', _RoomRepository.default);