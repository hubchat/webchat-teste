import ensureAuthenticated from '@middlewares/ensureAuthenticated';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';

import {
  userSchemaCreate,
  userSchemaUpdate,
} from '@shared/validations/modules/user';

import UserController from '../controllers/UserController';

const userController = new UserController();
const userRouter = Router();

userRouter
  .get('/', ensureAuthenticated, userController.finById)
  .post(
    '/',
    celebrate({
      [Segments.BODY]: userSchemaCreate,
    }),
    userController.create,
  )
  .put(
    '/',
    ensureAuthenticated,
    celebrate({
      [Segments.BODY]: userSchemaUpdate,
    }),
    userController.update,
  )
  .delete('/', ensureAuthenticated, userController.delete);

export default userRouter;
