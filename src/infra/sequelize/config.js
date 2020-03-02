const dotenv = require('dotenv').config;
const yn = require('yn');

dotenv.load();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    url:process.env.DATABASE_URL,
    sync: false,
    logging: console.log(), // eslint-disable-line no-console,
    ssl: true,
    dialectOptions: {
      ssl: yn(process.env.DATABASE_SSL),
    },
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    sync: process.env.SYNC_DATABASE || false,
    logging: false,
    ssl: false,
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    url:process.env.DATABASE_URL,
    sync: false,
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
};

module.exports = config;
module.exports.config = config[env];
