require('dotenv').config;
const yn = require('yn');


const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    url: `postgres://postgres:sandeep@localhost:5432/nodejs-boilerplate`,
    sync: false,
    logging: console.log(), // eslint-disable-line no-console,
    ssl: yn(process.env.DATABASE_SSL),
    dialectOptions: {
      ssl: yn(process.env.DATABASE_SSL),
    },
  },
  test: {
    url: '`postgres://postgres:sandeep@localhost:5432/nodejs-boilerplate-test`,',
    sync: process.env.SYNC_DATABASE || false,
    logging: false,
    ssl: false,
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    sync: false,
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  },
};

module.exports = config;
module.exports.config = config[env];
