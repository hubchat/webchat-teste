import { ObjectId } from 'mongoose';

export default interface IRoomDialog {
  id?: string;
  message: string;
  ownerId: ObjectId;
  roomId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
