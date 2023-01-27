import { Joi } from 'celebrate';

const roomSchemaCreate = Joi.object().keys({
  name: Joi.string().required(),
  owner: Joi.string(),
  description: Joi.string(),
});

const roomSchemaUpdate = Joi.object().keys({
  name: Joi.string(),
  owner: Joi.string(),
  description: Joi.string(),
});

export { roomSchemaCreate, roomSchemaUpdate };
