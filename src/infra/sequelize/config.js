require('dotenv').config; // eslint-disable-line no-unused-expressions
const yn = require('yn');
const highlightSql = require('sequelize-log-syntax-colors');
const { format } = require('sql-formatter');
const { Op } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const DOCKER_TEST_DATABASE_URL =
  'postgres://postgres:ucreate@192.38.1.2/nodejs_boilerplate';

const operatorsAliases = Op; // https://github.com/sequelize/sequelize/issues/8417#issuecomment-355123149

const config = {
  development: {
    url: process.env.TEST_DATABASE_URL,
    sync: false,
    logging: text => console.log(highlightSql(format(text))), // eslint-disable-line no-console,
    ssl: false,
    dialectOptions: {
      ssl: yn(process.env.DATABASE_SSL),
    },
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
  test: {
    url: DOCKER_TEST_DATABASE_URL,
    sync: process.env.SYNC_DATABASE || false,
    logging: false,
    operatorsAliases,
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
