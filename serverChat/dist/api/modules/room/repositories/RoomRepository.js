"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Room = _interopRequireDefault(require("../schemas/Room"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RoomRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _Room.default;
  }

  async find(page, limit) {
    const result = await this.ormRepository.find().limit(limit).skip((page - 1) * limit).sort({
      createdAt: 1
    });
    return result;
  }

  async findById(id) {
    const result = await this.ormRepository.findById(id);
    return result;
  }

  async create(room) {
    const result = await this.ormRepository.create(room);
    return result;
  }

  async update(room, id) {
    const result = await this.ormRepository.findByIdAndUpdate(id, room);
    return result;
  }

  async delete(id) {
    await this.ormRepository.findByIdAndDelete(id);
  }

}

var _default = RoomRepository;
exports.default = _default;