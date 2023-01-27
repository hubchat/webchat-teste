import IRoomRepository from '@modules/room/repositories/interfaces/IRoomRepository';
import RoomRepository from '@modules/room/repositories/RoomRepository';
import { container } from 'tsyringe';

container.registerSingleton<IRoomRepository>('RoomRepository', RoomRepository);
