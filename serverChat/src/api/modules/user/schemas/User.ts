import { model, Schema } from 'mongoose';

import IUser from './interfaces/IUser';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      requerid: true,
    },
    email: {
      type: String,
      requerid: true,
    },
    password: {
      type: String,
      requerid: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IUser>('User', UserSchema);
