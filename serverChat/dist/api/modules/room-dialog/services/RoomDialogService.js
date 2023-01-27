"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IRoomDialogRepository = _interopRequireDefault(require("../repositories/interfaces/IRoomDialogRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RoomDialogService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RoomDialogRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IRoomDialogRepository.default === "undefined" ? Object : _IRoomDialogRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class RoomDialogService {
  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  async find(page, limit, roomId) {
    const result = await this.roomRepository.find(page, limit, roomId);
    return result.reverse();
  }

  async create(roomDialog) {
    await this.roomRepository.create(roomDialog);
  }

}) || _class) || _class) || _class) || _class);
var _default = RoomDialogService;
exports.default = _default;