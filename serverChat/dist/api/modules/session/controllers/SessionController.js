"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../middlewares/error/AppError"));

var _UserService = _interopRequireDefault(require("../../user/services/UserService"));

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const userService = _tsyringe.container.resolve(_UserService.default);

    const user = await userService.findByEmail(email);

    if (!user) {
      throw new _AppError.default('Email or password invalid', 401);
    }

    const passwordCompare = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordCompare) {
      throw new _AppError.default('Email or password invalid', 401);
    }

    const token = (0, _jsonwebtoken.sign)({
      name: user.name,
      email: user.email
    }, String(process.env.TOKEN), {
      subject: String(user.id),
      expiresIn: '7d'
    });
    return response.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    });
  }

}

exports.default = SessionController;