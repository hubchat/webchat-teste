"use strict";

var _UserRepository = _interopRequireDefault(require("../../../../modules/user/repositories/UserRepository"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UserRepository', _UserRepository.default);