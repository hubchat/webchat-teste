import { Joi } from 'celebrate';

const roomDialogSchemaCreate = Joi.object().keys({
  message: Joi.string().required(),
  ownerId: Joi.string(),
  roomId: Joi.string().required(),
});

export { roomDialogSchemaCreate };
