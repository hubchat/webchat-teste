"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const RoomSchema = new _mongoose.Schema({
  name: {
    type: String,
    requerid: true
  },
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    requerid: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Room', RoomSchema);

exports.default = _default;