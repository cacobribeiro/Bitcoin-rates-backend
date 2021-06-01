const getJsonFile = require('./getJsonFile');
const setJsonFile = require('./setJsonFile');

module.exports = async (data) => {
  const file = await getJsonFile();

  file[data.currency] = data.value.toString();

  return setJsonFile(file);
};
