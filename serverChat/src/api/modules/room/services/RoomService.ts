import AppError from '@middlewares/error/AppError';
import { inject, injectable } from 'tsyringe';

import IRoomRepository from '../repositories/interfaces/IRoomRepository';
import IRoom from '../schemas/interfaces/IRoom';

@injectable()
class RoomService {
  constructor(
    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async find(page: number, limit: number): Promise<IRoom[]> {
    const result = await this.roomRepository.find(page, limit);

    return result;
  }

  public async findById(id: string): Promise<IRoom> {
    const result = await this.roomRepository.findById(id);

    if (!result) {
      throw new AppError('Room not found', 404);
    }

    return result;
  }

  public async create(room: IRoom): Promise<IRoom> {
    const result = await this.roomRepository.create(room);
    return result;
  }

  public async update(
    { name, owner, description }: IRoom,
    id: string,
  ): Promise<void> {
    const room = await this.roomRepository.findById(id);

    if (!room) {
      throw new AppError('Room not found', 404);
    }

    if (String(room.owner) !== String(owner)) {
      throw new AppError('Not authorized', 401);
    }

    const roomUpdate = {
      ...(owner && { owner }),
      ...(name && { name }),
      ...(description && { description }),
    };

    await this.roomRepository.update(roomUpdate, id);
  }

  public async delete(id: string, owner: string): Promise<void> {
    const room = await this.roomRepository.findById(id);

    if (!room) {
      throw new AppError('Room not found', 404);
    }

    if (String(room.owner) !== owner) {
      throw new AppError('Not authorized', 401);
    }

    await this.roomRepository.delete(id);
  }
}

export default RoomService;
