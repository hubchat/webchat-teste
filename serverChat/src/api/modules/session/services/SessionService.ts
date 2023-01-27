import AppError from '@middlewares/error/AppError';
import IUser from '@modules/user/schemas/interfaces/IUser';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class SessionService {
  public async session(user: IUser, password: string): Promise<object> {
    if (!user) {
      throw new AppError('Email or password invalid', 401);
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError('Email or password invalid', 401);
    }

    const token = sign(
      { name: user.name, email: user.email },
      String(process.env.TOKEN),
      {
        subject: String(user.id),
        expiresIn: '7d',
      },
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export default new SessionService();
