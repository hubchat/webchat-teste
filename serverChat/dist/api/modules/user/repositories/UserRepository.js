"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../middlewares/error/AppError"));

var _User = _interopRequireDefault(require("../schemas/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _User.default;
  }

  async findByEmail(email) {
    const result = await this.ormRepository.findOne({
      email
    });
    return result;
  }

  async findById(id) {
    const result = await this.ormRepository.findById(id);
    return result;
  }

  async create(user) {
    await this.ormRepository.create(user);
  }

  async update(user, id) {
    const result = await this.ormRepository.findByIdAndUpdate(id, user);

    if (!result) {
      throw new _AppError.default('User not found', 404);
    }
  }

  async delete(id) {
    await this.ormRepository.findByIdAndDelete(id);
  }

}

var _default = UserRepository;
exports.default = _default;