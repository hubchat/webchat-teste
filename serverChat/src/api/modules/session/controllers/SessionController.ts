import SessionService from '@modules/session/services/SessionService';
import UserService from '@modules/user/services/UserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userService = container.resolve(UserService);

    const user = await userService.findByEmail(email);

    const result = await SessionService.session(user, password);

    return response.json(result);
  }
}
