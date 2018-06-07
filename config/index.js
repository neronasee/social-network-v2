const path = require('path');
const knexfile = require('../knexfile');

const ROOT = path.resolve(__dirname, '../');
const NODE_ENV = process.env.NODE_ENV || 'development';

const isProd = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';
const isDev = NODE_ENV === 'development';

module.exports = {
  server: {
    port: process.env.PORT,
    root: ROOT,
  },

  env: {
    isDev,
    isProd,
    isTest,
  },

  secret: process.env.SERCRET || 'secret',

  jwtSecret: process.env.JWT_SECRET || 'secret',

  db: knexfile[NODE_ENV],
};
