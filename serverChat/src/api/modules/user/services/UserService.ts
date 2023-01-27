import AppError from '@middlewares/error/AppError';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '../repositories/interfaces/IUserRepository';
import IUser from '../schemas/interfaces/IUser';

@injectable()
class UserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async findByEmail(email: string): Promise<IUser> {
    const result = await this.userRepository.findByEmail(email);
    return result;
  }

  public async findById(id: string): Promise<IUser> {
    const result = await this.userRepository.findById(id);
    delete result.password;
    return result;
  }

  public async create({ email, password, name }: IUser): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new AppError('Email already exists', 404);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({ email, password: passwordHash, name });
  }

  public async update(
    { email, password, name }: IUser,
    id: string,
  ): Promise<void> {
    let passwordHash: string;

    if (password) {
      passwordHash = await hash(password, 8);
    }

    if (email) {
      const user = await this.userRepository.findByEmail(email);

      if (user) {
        throw new AppError('Email already exists', 404);
      }
    }

    const userUpdate = {
      ...(email && { email }),
      ...(name && { name }),
      ...(passwordHash && { password: passwordHash }),
    };

    await this.userRepository.update(userUpdate, id);
  }

  public async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}

export default UserService;
