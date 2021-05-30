const Joi = require('joi');
const regex = require('../regex');

module.exports = {
  login: {
    body: Joi.object().keys({
      email: Joi.string()
        .regex(regex.email)
        .required()
        .messages({ 'string.pattern.base': 'Campos inválidos' }),
      password: Joi.string().min(6).required(),
    }),
  },
};
