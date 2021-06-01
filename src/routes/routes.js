const fs = require('fs');
require('dotenv').config();

module.exports = (app) => {
  const PORT = process.env.PORT || 3000;

  console.log('\nRodas Disponiveis:\n');
  fs.readdirSync('./src/routes/').forEach((fileName) => {
    if (fileName.includes('routes')) return;

    let route = '/api/' + fileName.split('.')[0];

    console.log(`> http://localhost:${PORT}${route}\n`);

    app.use(route, require('./' + fileName));
  });

  return;
};
