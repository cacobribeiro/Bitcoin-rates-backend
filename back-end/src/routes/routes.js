const { response } = require('express');
const fs = require('fs');

module.exports = (app) => {
  console.log('\nRodas Disponiveis:\n');
  fs.readdirSync('./src/routes/').forEach((fileName) => {
    if (fileName.includes('routes')) return;

    let route = '/api/' + fileName.split('.')[0];

    console.log(`> http://localhost:3000${route}\n`);

    app.use(route, require('./' + fileName));
  });

  return;
};
