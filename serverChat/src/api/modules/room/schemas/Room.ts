import { model, Schema } from 'mongoose';

import IRoom from './interfaces/IRoom';

const RoomSchema = new Schema<IRoom>(
  {
    name: {
      type: String,
      requerid: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
      requerid: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IRoom>('Room', RoomSchema);
