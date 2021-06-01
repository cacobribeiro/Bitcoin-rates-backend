const Joi = require('joi');

module.exports = (schema) => {
  return (req, res, next) => {
    // Transformamos o objeto em um schema Joi, aceitando qualquer campo no request.
    const reqSchema = Joi.object().keys(schema).unknown(true);

    const { error, value } = reqSchema.validate(req);

    if (error) {
      const message = error.details.map((d) => d.message)[0];

      const reqError = { message };

      return res.status(400).send(reqError);
    }

    req.body = value.body;
    req.query = value.query;
    req.params = value.params;

    return next();
  };
};
