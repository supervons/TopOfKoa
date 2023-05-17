const koa = require("koa");
const Router = require("@koa/router");
const app = new koa();
const router = new Router();
const { koaBody } = require("koa-body");

router.post("/auth", async (ctx, next) => {
  const { uId } = ctx.request.body;
  ctx.body = `Hello world! ${uId}`;
});

router.post("/file", async (ctx, next) => {
  ctx.body = `Success!`;
});

app.use(
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      uploadDir: "/Users/vons/WebstormProjects/Koa/TopOfKoa/demo-5/"
    }
  })
);
app.use(router.routes());
app.listen(3000, () => {
  console.log("启动成功！http://localhost:3000");
});
