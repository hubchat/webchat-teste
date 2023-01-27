import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IRoomDialog from '../schemas/interfaces/IRoomDialog';
import RoomDialogService from '../services/RoomDialogService';

export default class RoomDialogController {
  public async find(request: Request, response: Response): Promise<Response> {
    const { page, limit, roomId } = request.query;

    const roomDialogService = container.resolve(RoomDialogService);

    const roomDialog = await roomDialogService.find(
      Number(page),
      Number(limit),
      String(roomId),
    );

    return response.json(roomDialog);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const form = request.body;

    const roomDialog: IRoomDialog = { ...form, ownerId: request.user.id };

    const roomDialogService = container.resolve(RoomDialogService);

    await roomDialogService.create(roomDialog);

    return response
      .status(201)
      .json({ status: 'Created', timestemp: new Date() });
  }
}
