const koa=require('koa');
const Router = require('@koa/router')
const app=new koa();
const router = new Router()
router.get('/', async(ctx, next)=>{
  ctx.body = 'Hello world!'
})
router.get('/404', async(ctx, next)=>{
  ctx.body = '404 - node found.'
})

app.use(router.routes())
app.listen(3000,()=>{
  console.log('启动成功！http://localhost:3000')
});