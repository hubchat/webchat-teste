"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _RoomDialogService = _interopRequireDefault(require("../services/RoomDialogService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RoomDialogController {
  async find(request, response) {
    const {
      page,
      limit,
      roomId
    } = request.query;

    const roomDialogService = _tsyringe.container.resolve(_RoomDialogService.default);

    const roomDialog = await roomDialogService.find(Number(page), Number(limit), String(roomId));
    return response.json(roomDialog);
  }

  async create(request, response) {
    const form = request.body;
    const roomDialog = { ...form,
      ownerId: request.user.id
    };

    const roomDialogService = _tsyringe.container.resolve(_RoomDialogService.default);

    await roomDialogService.create(roomDialog);
    return response.status(201).json({
      status: 'Created',
      timestemp: new Date()
    });
  }

}

exports.default = RoomDialogController;