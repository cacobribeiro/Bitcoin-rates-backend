// Router do Express
const router = require('express').Router();
// Middleware capaz de pegar o req antes da chama API
const validate = require('../middleware/requestValidation')
// Controller da rota Auth
const loginController = require('../controllers/login.controller');
// Schema para validação com Joi.
const loginSchema = require('../utils/helpers/schemas/login')

// Definição das rotas e os controllers correspondentes.
router.post('/', validate(loginSchema.login), loginController.login);

module.exports = router;