
//引入Koa
const koa=require('koa');

const app=new koa();

//配置中间件
app.use( async (ctx)=>{
  ctx.body='Hello Koa worlds2'
})

//监听端口
app.listen(3000,()=>{
  console.log('启动成功！http://localhost:3000')
});