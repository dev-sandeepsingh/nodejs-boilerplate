require('dotenv').config;
const yn = require('yn');


const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    url: 'postgres://qlusiissztrnvu:7ff1143faf77f1549c0fa1a4e056ad2d55e87758500cde2a5b732800e8d0daa8@ec2-46-137-188-105.eu-west-1.compute.amazonaws.com:5432/df7d5qoflm41sc',
    sync: false,
    logging: console.log(), // eslint-disable-line no-console,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
  },
  test: {
    url: process.env.DATABASE_URL,
    sync: process.env.SYNC_DATABASE || false,
    logging: false,
    ssl: false,
    dialectOptions: {
      ssl: false,
    },
  },
  production: {    
    url: 'postgres://qlusiissztrnvu:7ff1143faf77f1549c0fa1a4e056ad2d55e87758500cde2a5b732800e8d0daa8@ec2-46-137-188-105.eu-west-1.compute.amazonaws.com:5432/df7d5qoflm41sc',
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
