require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: 3001,    
    rollbarAccessToken: null,
    reportErrorRequest: false,      
    cors: {
      origin: ['http://localhost:3000'],
    },    
    origin: 'http://localhost:3000',    
  },
  test: {
    port: 3000,
    rollbarAccessToken: null,
    reportErrorRequest: false,
    cors: {
      origin: [],
    },    
  },
  production: {
    port: 3000,    
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
    
    cors: {
      origin: (process.env.CORS_ORIGIN || '').split(','),
    },
  },
};

module.exports = config[env];
