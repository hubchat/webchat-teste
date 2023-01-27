import IRoom from '@modules/room/schemas/interfaces/IRoom';

export default interface IRoomRepository {
  find(page: number, limit: number): Promise<IRoom[]>;
  findById(id: string): Promise<IRoom>;
  create(room: IRoom): Promise<IRoom>;
  update(room: IRoom, id: string): Promise<IRoom>;
  delete(id: string): Promise<void>;
}
