import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from './error/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  name: string;
  email: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, String(process.env.TOKEN));

    const { sub, name, email } = decoded as ITokenPayload;

    request.user = {
      id: sub,
      name,
      email,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}
