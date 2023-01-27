import { Joi } from 'celebrate';

const sessionSchemaCreate = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

export { sessionSchemaCreate };
