const Router = require('koa-router');

const router = new Router();

const userCtrl = require('../controllers/user.controller');

router.get('/', userCtrl.list);
router.post('/', userCtrl.create);

module.exports = router;
