const database = require('../../database/login.json');
const createToken = require('../utils/helpers/auth/createToken');

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const data = database.find((user) => user.email === email && user.password === password);

      if (!data) {

        res.status(400).send({ message: 'Campos inválidos' });

      }

	  const token = createToken(data)

      res.status(200).send({token});
	  
    } catch (err) {
		
		res.status(400).json({message: err});
    }
  },
};
