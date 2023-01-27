import RoomService from '@modules/room/services/RoomService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IRoom from '../schemas/interfaces/IRoom';

export default class RoomController {
  public async find(request: Request, response: Response): Promise<Response> {
    const { page, limit } = request.query;

    const roomService = container.resolve(RoomService);

    const room = await roomService.find(Number(page), Number(limit));

    return response.json(room);
  }

  public async finById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const roomService = container.resolve(RoomService);

    const room = await roomService.findById(id);

    return response.json(room);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const form = request.body;

    const room: IRoom = { ...form, owner: request.user.id };

    const roomService = container.resolve(RoomService);

    const result = await roomService.create(room);

    return response.status(201).json(result);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const form = request.body;

    const room: IRoom = { ...form, owner: request.user.id };

    const roomService = container.resolve(RoomService);

    await roomService.update(room, id);

    return response
      .status(200)
      .json({ status: 'Updated', timestemp: new Date() });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const roomService = container.resolve(RoomService);

    await roomService.delete(id, request.user.id);

    return response
      .status(200)
      .json({ status: 'Deleted', timestemp: new Date() });
  }
}
