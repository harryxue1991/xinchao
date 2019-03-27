const router = require('koa-router')()

router.prefix('/users')

router.get('/', async (ctx, next) => {
  await ctx.render("index",{
      message:"nodeWeb 首页"
  })
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
