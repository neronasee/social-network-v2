require('dotenv').config();
const path = require('path');
// TODO: snake case mappers

const options = Object.assign({
  client: 'pg',
  connection: process.env.DB_CONNECTION,
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'src/migrations'),
  },
  debug: false,
  seeds: {
    directory: path.join(__dirname, 'src/seeds'),
  },
});

module.exports = {
  development: Object.assign({}, options, { debug: true }),

  test: Object.assign({}, options),

  production: Object.assign({}, options),
};
