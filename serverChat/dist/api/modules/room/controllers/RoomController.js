"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RoomService = _interopRequireDefault(require("../services/RoomService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RoomController {
  async find(request, response) {
    const {
      page,
      limit
    } = request.query;

    const roomService = _tsyringe.container.resolve(_RoomService.default);

    const room = await roomService.find(Number(page), Number(limit));
    return response.json(room);
  }

  async finById(request, response) {
    const {
      id
    } = request.params;

    const roomService = _tsyringe.container.resolve(_RoomService.default);

    const room = await roomService.findById(id);
    return response.json(room);
  }

  async create(request, response) {
    const form = request.body;
    const room = { ...form,
      owner: request.user.id
    };

    const roomService = _tsyringe.container.resolve(_RoomService.default);

    const result = await roomService.create(room);
    return response.status(201).json(result);
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const form = request.body;
    const room = { ...form,
      owner: request.user.id
    };

    const roomService = _tsyringe.container.resolve(_RoomService.default);

    await roomService.update(room, id);
    return response.status(200).json({
      status: 'Updated',
      timestemp: new Date()
    });
  }

  async delete(request, response) {
    const {
      id
    } = request.params;

    const roomService = _tsyringe.container.resolve(_RoomService.default);

    await roomService.delete(id, request.user.id);
    return response.status(200).json({
      status: 'Deleted',
      timestemp: new Date()
    });
  }

}

exports.default = RoomController;