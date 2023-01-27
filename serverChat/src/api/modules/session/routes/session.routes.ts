import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';

import { sessionSchemaCreate } from '@shared/validations/modules/session';

import SessionController from '../controllers/SessionController';

const sessionController = new SessionController();

const sessionRouter = Router();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: sessionSchemaCreate,
  }),
  sessionController.create,
);

export default sessionRouter;
