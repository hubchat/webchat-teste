"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RoomDialog = _interopRequireDefault(require("../schemas/RoomDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RoomDialogRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _RoomDialog.default;
  }

  async find(page, limit, roomId) {
    const result = await this.ormRepository.find({
      roomId
    }).limit(limit).skip((page - 1) * limit).sort({
      createdAt: -1
    }).populate({
      path: 'ownerId',
      select: ['name', 'email']
    });
    return result;
  }

  async create(room) {
    await this.ormRepository.create(room);
  }

}

var _default = RoomDialogRepository;
exports.default = _default;