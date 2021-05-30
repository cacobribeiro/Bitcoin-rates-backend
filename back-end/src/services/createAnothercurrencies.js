const translationDescriptions = {
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
};

module.exports = (code, stringRate, stringDolar) => {
  const rate = (Number(stringRate) * Number(stringDolar)).toString()
  const floatValue = parseFloat(rate)

  return {
    code,
    rate,
    description: translationDescriptions[code],
    rate_float: floatValue,
  };
};
