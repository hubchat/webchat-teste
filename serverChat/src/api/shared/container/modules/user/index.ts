import IUserRepository from '@modules/user/repositories/interfaces/IUserRepository';
import UserRepository from '@modules/user/repositories/UserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
