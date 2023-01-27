"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserService = _interopRequireDefault(require("../services/UserService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async finById(request, response) {
    const userService = _tsyringe.container.resolve(_UserService.default);

    const user = await userService.findById(request.user.id);
    return response.json(user);
  }

  async create(request, response) {
    const form = request.body;

    const userService = _tsyringe.container.resolve(_UserService.default);

    await userService.create(form);
    return response.status(201).json({
      status: 'Created',
      timestemp: new Date()
    });
  }

  async update(request, response) {
    const form = request.body;

    const userService = _tsyringe.container.resolve(_UserService.default);

    await userService.update(form, request.user.id);
    return response.status(200).json({
      status: 'Updated',
      timestemp: new Date()
    });
  }

  async delete(request, response) {
    const userService = _tsyringe.container.resolve(_UserService.default);

    await userService.delete(request.user.id);
    return response.status(200).json({
      status: 'Deleted',
      timestemp: new Date()
    });
  }

}

exports.default = UserController;