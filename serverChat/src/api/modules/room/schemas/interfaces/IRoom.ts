import { ObjectId } from 'mongoose';

export default interface IRoom {
  id?: string;
  name: string;
  owner: ObjectId;
  description: string;
}
