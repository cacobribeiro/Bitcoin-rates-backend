const fs = require('fs');

module.exports = async (data) => {
  const path =
    '/home/cacoribeiro/Documentos/Projeto Seletivo Trybe/processo-seletivo/back-end/database/currencies.json';

  const fileReady = fs.writeFileSync(path, JSON.stringify(data, null, 2));

  console.log('fileReady', fileReady);

  return true;
};
