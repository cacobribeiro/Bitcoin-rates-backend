const { valid } = require('joi');
const Joi = require('joi');
const regex = require('../regex');

module.exports = {
  changeCurrency: {
    body: Joi.object().keys({
      currency: Joi.string()
        .valid('BRL', 'EUR', 'CAD')
        .required()
        .messages({ 'any.only': 'Moeda inválida' }),
      value: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({ 'number.positive': 'Valor inválido', 'number.integer': 'Valor inválido', 'number.base': 'Campos Inválidos' }),
    }),
  },
};
