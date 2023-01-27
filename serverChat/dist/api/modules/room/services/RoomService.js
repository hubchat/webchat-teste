"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../middlewares/error/AppError"));

var _tsyringe = require("tsyringe");

var _IRoomRepository = _interopRequireDefault(require("../repositories/interfaces/IRoomRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RoomService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RoomRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IRoomRepository.default === "undefined" ? Object : _IRoomRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class RoomService {
  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  async find(page, limit) {
    const result = await this.roomRepository.find(page, limit);
    return result;
  }

  async findById(id) {
    const result = await this.roomRepository.findById(id);
    return result;
  }

  async create(room) {
    const result = await this.roomRepository.create(room);
    return result;
  }

  async update({
    name,
    owner,
    description
  }, id) {
    const room = await this.roomRepository.findById(id);

    if (!room) {
      throw new _AppError.default('Room not found', 404);
    }

    if (String(room.owner) !== String(owner)) {
      throw new _AppError.default('Not authorized', 401);
    }

    const roomUpdate = { ...(owner && {
        owner
      }),
      ...(name && {
        name
      }),
      ...(description && {
        description
      })
    };
    await this.roomRepository.update(roomUpdate, id);
  }

  async delete(id, owner) {
    const room = await this.roomRepository.findById(id);

    if (!room) {
      throw new _AppError.default('Room not found', 404);
    }

    if (String(room.owner) !== owner) {
      throw new _AppError.default('Not authorized', 401);
    }

    await this.roomRepository.delete(id);
  }

}) || _class) || _class) || _class) || _class);
var _default = RoomService;
exports.default = _default;