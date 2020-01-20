require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 8080,    
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: false,      
    cors: {
      origin: ['http://localhost:8080'],
    },    
    origin: 'http://localhost:8080',
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
    port: process.env.PORT || 8080,
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,
    
    cors: {
      origin: (process.env.CORS_ORIGIN || '').split(','),
    },
  },
};

module.exports = config[env];
