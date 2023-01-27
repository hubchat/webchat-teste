import ensureAuthenticated from '@middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { roomDialogSchemaCreate } from '@shared/validations/modules/room-dialog';

import RoomDialogController from '../controllers/RoomDialogController';

const roomDialogController = new RoomDialogController();
const roomDialogRouter = Router();

roomDialogRouter
  .get(
    '/',
    ensureAuthenticated,
    celebrate({
      [Segments.QUERY]: {
        page: Joi.number().required(),
        limit: Joi.number().required(),
        roomId: Joi.string().required(),
      },
    }),
    roomDialogController.find,
  )
  .post(
    '/',
    ensureAuthenticated,
    celebrate({
      [Segments.BODY]: roomDialogSchemaCreate,
    }),
    roomDialogController.create,
  );

export default roomDialogRouter;
