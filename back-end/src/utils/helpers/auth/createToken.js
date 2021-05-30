const jwt = require('jsonwebtoken');
const config = require('../../../../config/auth.json')

const secret = process.env.SECRET || config.secret

function createToken(payload) {
  const headers = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, headers);

  return token;
}

module.exports = createToken;
