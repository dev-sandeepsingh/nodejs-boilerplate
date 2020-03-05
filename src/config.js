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
    docs: {
      username: 'dev',
      password: 'dev',
    },
    origin: 'http://localhost:8080',
    redisUrl: 'redis://localhost:6381',
  },
  test: {
    port: 3000,
    rollbarAccessToken: null,
    reportErrorRequest: false,
    cors: {
      origin: [],
    },
    redisUrl: 'redis://localhost:6380',
  },
  production: {
    port: process.env.PORT || 8080,
    rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    reportErrorRequest: true,

    cors: {
      origin: (process.env.CORS_ORIGIN || '').split(','),
    },
    docs: {
      username: process.env.DOCS_USERNAME,
      password: process.env.DOCS_PASSWORD,
    },
    redisUrl: process.env.REDIS_URL,
  },
};

module.exports = config[env];
