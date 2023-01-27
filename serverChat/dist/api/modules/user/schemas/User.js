"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const UserSchema = new _mongoose.Schema({
  name: {
    type: String,
    requerid: true
  },
  email: {
    type: String,
    requerid: true
  },
  password: {
    type: String,
    requerid: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports.default = _default;