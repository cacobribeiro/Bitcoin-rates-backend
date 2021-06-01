// Router do Express
const router = require('express').Router();
// Valida o Bearer Token
const validateJWT = require('../middleware/validateToken');
// Middleware capaz de pegar o req antes da chama API
const validate = require('../middleware/requestValidation')
// Schema para validação com Joi.
const currencySchema = require('../utils/helpers/schemas/currencys')
// Controller da rota Auth
const cryptoController = require('../controllers/crypto.controller');

// Definição das rotas e os controllers correspondentes.
router.get('/btc', validateJWT, cryptoController.btc);

router.post('/btc', validateJWT, validate(currencySchema.changeCurrency), cryptoController.btcPost);

module.exports = router;