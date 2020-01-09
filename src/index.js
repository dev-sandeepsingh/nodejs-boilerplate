// require('newrelic');

const { port } = require('./config');
const { createSequelize } = require('./infra/sequelize');
const { createApp } = require('./infra/http/app');
const { reportError } = require('./infra/report-error');

(async () => {
  const sequelize = await createSequelize();
  const app = createApp({
    reportError,
    sequelize,
  });

  const server = app.listen(port, () => {
    console.info(`Listening on ${port}`); // eslint-disable-line no-console    
  });

  const cleanUp = async () => {
    try {
      await sequelize.close();
      await server.close();
      process.exit(0);
    } catch (err) {
      process.exit(1);
    }
  };

  process.on('SIGINT', cleanUp);
  process.on('SIGTERM', cleanUp);

})();
