const fs = require('fs');

module.exports = async () => {
  const path =
    '/home/cacoribeiro/Documentos/Projeto Seletivo Trybe/processo-seletivo/back-end/database/currencies.json';

  const fileReady = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });

  return JSON.parse(fileReady);
};
