const router = require('koa-router')(),
      baseApi = require('../config').baseApi,
      register = require('../controllers/register'),
      login = require('../controllers/login'),
      verify = require('../middlewares/verify'), //中间件
      userInfo = require('../controllers/userInfo.js');

router.prefix(`/${baseApi}`)


router.post('/register', register)  //注册
      .post('/login', login)        //登入
      .get('/user_info', verify, userInfo.getUserInfo) // 获取用户资料
module.exports = router
