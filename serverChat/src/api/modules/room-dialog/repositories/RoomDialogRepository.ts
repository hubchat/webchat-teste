import { Model } from 'mongoose';

import IRoomDialog from '../schemas/interfaces/IRoomDialog';
import RoomDialog from '../schemas/RoomDialog';
import IRoomDialogRepository from './interfaces/IRoomDialogRepository';

class RoomDialogRepository implements IRoomDialogRepository {
  private ormRepository: Model<IRoomDialog>;

  constructor() {
    this.ormRepository = RoomDialog;
  }

  public async find(
    page: number,
    limit: number,
    roomId: string,
  ): Promise<IRoomDialog[]> {
    const result = await this.ormRepository
      .find({ roomId })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate({ path: 'ownerId', select: ['name', 'email'] });

    return result;
  }

  public async create(room: IRoomDialog): Promise<void> {
    await this.ormRepository.create(room);
  }
}

export default RoomDialogRepository;
