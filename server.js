const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

require('dotenv').config();

const routes = require('./src/routes/routes');
const invalidRoutes = require('./src/middleware/invalidRoutes')

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use(cors())

//Verificação de Rotas invalidas.
app.use(invalidRoutes)

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listenning on http://localhost:${PORT}`));
