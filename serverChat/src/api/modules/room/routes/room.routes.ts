import ensureAuthenticated from '@middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import {
  roomSchemaCreate,
  roomSchemaUpdate,
} from '@shared/validations/modules/room';

import RoomController from '../controllers/RoomController';

const roomController = new RoomController();
const roomRouter = Router();

roomRouter
  .get(
    '/',
    ensureAuthenticated,
    celebrate({
      [Segments.QUERY]: {
        page: Joi.number().required(),
        limit: Joi.number().required(),
      },
    }),
    roomController.find,
  )
  .get(
    '/:id',
    ensureAuthenticated,
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    }),
    roomController.finById,
  )
  .post(
    '/',
    ensureAuthenticated,
    celebrate({
      [Segments.BODY]: roomSchemaCreate,
    }),
    roomController.create,
  )
  .put(
    '/:id',
    ensureAuthenticated,
    celebrate({
      [Segments.BODY]: roomSchemaUpdate,
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    }),
    roomController.update,
  )
  .delete(
    '/:id',
    ensureAuthenticated,
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    }),
    roomController.delete,
  );

export default roomRouter;
