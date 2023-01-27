import IRoomDialogRepository from '@modules/room-dialog/repositories/interfaces/IRoomDialogRepository';
import RoomDialogRepository from '@modules/room-dialog/repositories/RoomDialogRepository';
import { container } from 'tsyringe';

container.registerSingleton<IRoomDialogRepository>(
  'RoomDialogRepository',
  RoomDialogRepository,
);
