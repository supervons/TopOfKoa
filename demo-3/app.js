
//引入Koa
const koa=require('koa');

const app=new koa();

// 前置中间件
app.use( async (ctx, next)=>{
  console.log('我是前置中间件-request')
  await next()
  console.log('我是前置中间件-response')
})

//配置中间件
app.use( async (ctx)=>{
  console.log('Hello')
  ctx.body='Hello Koa world'
})

//监听端口
app.listen(3000,()=>{
  console.log('启动成功！http://localhost:3000')
});