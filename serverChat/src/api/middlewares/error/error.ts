import { Response, Request, NextFunction } from 'express';
import Youch from 'youch';

import AppError from './AppError';

export default async (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (!process.env.PROD) {
    const errors = await new Youch(err, request).toJSON();

    return response.status(500).json(errors);
  }

  return response.status(500).json({ message: 'An error has occurred' });
};
