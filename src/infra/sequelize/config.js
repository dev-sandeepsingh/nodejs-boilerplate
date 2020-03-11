require('dotenv').config; // eslint-disable-line no-unused-expressions
const yn = require('yn');
const highlightSql = require('sequelize-log-syntax-colors');
const { format } = require('sql-formatter');

const env = process.env.NODE_ENV || 'development';
const DOCKER_DEV_DATABASE_URL =
  'postgres://postgres:postgres@localhost:5434/dev';
const DOCKER_TEST_DATABASE_URL =
  'postgres://postgres:postgres@localhost:5433/test';

const config = {
  development: {
    url: process.env.DATABASE_URL || DOCKER_DEV_DATABASE_URL,
    sync: false,
    logging: text => console.log(highlightSql(format(text))), // eslint-disable-line no-console,
    ssl: true,
    dialectOptions: {
      ssl: yn(process.env.DATABASE_SSL),
    },
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
  test: {
    url: process.env.TEST_DATABASE_URL || DOCKER_TEST_DATABASE_URL,
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
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
};

module.exports = config;
module.exports.config = config[env];
