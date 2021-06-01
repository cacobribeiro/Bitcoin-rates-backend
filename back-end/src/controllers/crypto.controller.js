const currentBTC = require('../services/currentBTC');
const JSONTransformation = require('../services/JSONTransformation');

module.exports = {
  btc: async (req, res) => {
    try {
      const results = await currentBTC();

      res.status(200).send(results);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  btcPost: async (req, res) => {
    try {
      const results = await JSONTransformation(req.body);

      if (results == true) {
        res.status(200).send({
          message: 'Valor alterado com sucesso!',
        });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },
};
