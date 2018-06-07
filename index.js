require('dotenv').config();
const {
  server: { port },
} = require('./config');

const app = require('./src/app');

app.listen(port);
