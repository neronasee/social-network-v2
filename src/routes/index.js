const Router = require('koa-router');
const userRouter = require('./user.route').routes();

const router = new Router();

router.get('/healthcheck', async ctx => {
  ctx.body = 'ok';
});

router.use('/users', userRouter);

module.exports = router;
