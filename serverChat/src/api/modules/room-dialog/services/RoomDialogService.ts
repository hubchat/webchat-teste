import { inject, injectable } from 'tsyringe';

import IRoomDialogRepository from '../repositories/interfaces/IRoomDialogRepository';
import IRoomDialog from '../schemas/interfaces/IRoomDialog';

@injectable()
class RoomDialogService {
  constructor(
    @inject('RoomDialogRepository')
    private roomRepository: IRoomDialogRepository,
  ) {}

  public async find(
    page: number,
    limit: number,
    roomId: string,
  ): Promise<IRoomDialog[]> {
    const result = await this.roomRepository.find(page, limit, roomId);
    return result.reverse();
  }

  public async create(roomDialog: IRoomDialog): Promise<void> {
    await this.roomRepository.create(roomDialog);
  }
}

export default RoomDialogService;
