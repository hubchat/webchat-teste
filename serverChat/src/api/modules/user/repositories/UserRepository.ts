import AppError from '@middlewares/error/AppError';
import IUser from '@modules/user/schemas/interfaces/IUser';
import User from '@modules/user/schemas/User';
import { Model } from 'mongoose';

import IUserRepository from './interfaces/IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: Model<IUser>;

  constructor() {
    this.ormRepository = User;
  }

  public async findByEmail(email: string): Promise<IUser> {
    const result = await this.ormRepository.findOne({ email });

    return result;
  }

  public async findById(id: string): Promise<IUser> {
    const result = await this.ormRepository.findById(id);

    return result;
  }

  public async create(user: IUser): Promise<void> {
    await this.ormRepository.create(user);
  }

  public async update(user: IUser, id: string): Promise<void> {
    const result = await this.ormRepository.findByIdAndUpdate(id, user);

    if (!result) {
      throw new AppError('User not found', 404);
    }
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.findByIdAndDelete(id);
  }
}

export default UserRepository;
