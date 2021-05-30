const jwt = require('jsonwebtoken');
const config = require('../../config/auth.json')


const secret = process.env.SECRET || config.secret;

const validateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No auth.' });
    }

    const data = jwt.verify(token, secret);

    const { iat, exp, password, ...userData } = data;

    req.user = userData;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = validateJWT;
