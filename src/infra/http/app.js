const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const bodyParserJsonError = require('express-body-parser-json-error');
const config = require('../../config.js');

const { createUsersRoute } = require('./routes/users/index.js');
const { createCore } = require('../../core/index.js');
const { createApplication } = require('../../application/index.js');
const { createNotFoundRoute } = require('./routes/not-found.js');
const { createUriErrorRoute } = require('./routes/uri-error.js');
const { createErrorRoute } = require('./routes/error.js');

const createApp = ({
  reportError,
  config: { cors: { origin: corsOrigin } } = config,  
  sequelize = {},
  application = {},
  core,  
}) => {
  core = core || createCore({ sequelize }); // eslint-disable-line no-param-reassign
  // eslint-disable-next-line no-param-reassign
  application = Object.assign(
    {},
    createApplication({ sequelize, core }),
    application,
  );

  const app = express();

  const notFoundRoute = createNotFoundRoute();
  const uriErrorRoute = createUriErrorRoute();
  const errorRoute = createErrorRoute({ reportError });

  
  const usersRoute = createUsersRoute({ core, application });



  // if (config.docs.username && config.docs.password) {
  //   app.use('/docs', [
  //     httpAuth.realm('Docs'),
  //     ({ username, password }, res, next) => {
  //       if (
  //         username !== config.docs.username ||
  //         password !== config.docs.password
  //       ) {
  //         res.sendStatus(401);
  //         return;
  //       }
  //       next();
  //     },
  //   ]);
  // }
  app.use('/docs', express.static(path.resolve(__dirname, '../../../apidoc')));
  

  // app.use(
  //   cors({
  //     origin: corsOrigin,
  //     methods: ['POST', 'GET', 'PATCH', 'DELETE'],
  //     allowedHeaders: ['Content-Type', 'X-CSRF-Token'],
  //     exposedHeaders: ['X-CSRF-Token'],
  //     credentials: true,
  //   }),
  // );

  // const isProd = process.env.NODE_ENV === 'production';
  // if (isProd) {
  //   app.set('trust proxy', true);
  // }
  
  app.use(bodyParser.json());
  app.use(bodyParserJsonError());

  

  app.use('/users', usersRoute);
  app.get('/', (req, res) => res.sendStatus(200));

  app.use(notFoundRoute);
  app.use(uriErrorRoute);
  app.use(errorRoute);

  return app;
};

module.exports = { createApp };
