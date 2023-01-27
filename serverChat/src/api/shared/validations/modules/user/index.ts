import { Joi } from 'celebrate';

const userSchemaCreate = Joi.object().keys({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const userSchemaUpdate = Joi.object().keys({
  name: Joi.string(),
  password: Joi.string(),
  email: Joi.string(),
});

export { userSchemaCreate, userSchemaUpdate };
