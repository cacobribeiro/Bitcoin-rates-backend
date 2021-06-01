const translationDescriptions = {
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
};

module.exports = (code, stringRate, stringDolar) => {
  const rateFloat = stringRate * stringDolar;
  const rate = rateFloat.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  return {
    code,
    rate,
    description: translationDescriptions[code],
    rate_float: rateFloat,
  };
};
