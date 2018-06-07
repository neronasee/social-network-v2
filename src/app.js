const Koa = require('koa');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');

const config = require('../config');

const error = require('./middlewares/error.middleware');
const router = require('./routes');

const app = new Koa();

if (!config.env.isTest) {
  app.use(helmet());
}

app.use(logger());
app.use(bodyParser());

app.use(error);

app.use(cors());

app.use(router.routes());

module.exports = app;
