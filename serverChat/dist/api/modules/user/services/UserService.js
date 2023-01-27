"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../middlewares/error/AppError"));

var _bcryptjs = require("bcryptjs");

var _tsyringe = require("tsyringe");

var _IUserRepository = _interopRequireDefault(require("../repositories/interfaces/IUserRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.default === "undefined" ? Object : _IUserRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findByEmail(email) {
    const result = await this.userRepository.findByEmail(email);
    return result;
  }

  async findById(id) {
    const result = await this.userRepository.findById(id);
    delete result.password;
    return result;
  }

  async create({
    email,
    password,
    name
  }) {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new _AppError.default('Email already exists', 404);
    }

    const passwordHash = await (0, _bcryptjs.hash)(password, 8);
    await this.userRepository.create({
      email,
      password: passwordHash,
      name
    });
  }

  async update({
    email,
    password,
    name
  }, id) {
    let passwordHash;

    if (password) {
      passwordHash = await (0, _bcryptjs.hash)(password, 8);
    }

    if (email) {
      const user = await this.userRepository.findByEmail(email);

      if (user) {
        throw new _AppError.default('Email already exists', 404);
      }
    }

    const userUpdate = { ...(email && {
        email
      }),
      ...(name && {
        name
      }),
      ...(passwordHash && {
        password: passwordHash
      })
    };
    await this.userRepository.update(userUpdate, id);
  }

  async delete(id) {
    await this.userRepository.delete(id);
  }

}) || _class) || _class) || _class) || _class);
var _default = UserService;
exports.default = _default;