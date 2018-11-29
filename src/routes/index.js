const Router = require('koa-router');
const controllers = require('../controllers')
const router = new Router({
    prefix: '/web'
});

router.get('/getArticleList', controllers.home.getArticleList);
router.get('/getDetail', controllers.detail.getDetail);
router.get('/discovery/channel', controllers.discovery.getChannelList);
router.get('/discovery/articleList', controllers.discovery.getArticleList);
router.get('/discovery/favorateList', controllers.discovery.getFavorateList);


module.exports = router;