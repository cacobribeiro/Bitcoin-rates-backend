const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);

module.exports = async (req, res, next) => {
  const routesFiles = await readdir('./src/routes');

  const route = req.originalUrl.split(/[/?]/);
  
  const routeFileName = `${route[2]}.route.js`;

  if (!routesFiles.includes(routeFileName))
    return res.status(404).send({
      message: 'Endpoint não encontrado',
    });

  return next();
};
