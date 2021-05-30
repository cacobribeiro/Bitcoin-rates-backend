const axios = require('axios');
const currencies = require('../../database/currencies.json');
const createAnothercurrencies = require('./createAnothercurrencies');

module.exports = () => {
  const config = {
    url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
    method: 'GET',
  };

  return axios(config).then((response) => {
    const data = response.data;

    Object.entries(currencies).forEach((coin) => {
      data.bpi[coin[0]] = createAnothercurrencies(coin[0], coin[1], data.bpi.USD.rate_float);
    });

    return data;
  });
};
