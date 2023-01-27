"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const RoomDialogSchema = new _mongoose.Schema({
  message: {
    type: String,
    requerid: true
  },
  ownerId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  roomId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('RoomDialog', RoomDialogSchema);

exports.default = _default;