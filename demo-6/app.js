const koa = require("koa");
const Router = require("@koa/router");
const jwt = require("jsonwebtoken");
const koaJWT = require("koa-jwt");
const { koaBody } = require("koa-body");
const app = new koa();
const router = new Router();
const JWT_SECRET = "shared-secret";
/**
 * 授权接口，用户名密码正确返回 JWT ，错误则提示
 */
router.post("/auth", async (ctx, next) => {
  const jwtString = jwt.sign({ id: "root" }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60
  });
  const { uId, password } = ctx.request.body;
  if (uId === "root" && password === "123456") {
    ctx.body = { code: "200", msg: "success", token: jwtString };
  } else {
    ctx.body = { code: "-1", msg: "The user name or password is incorrect" };
  }
});

/**
 * 获取用户信息接口，需携带 JWT 访问
 */
router.get("/user", async (ctx, next) => {
  ctx.body = "This is user info.";
});

app.use(koaBody());
app.use(koaJWT({ secret: "shared-secret" }).unless({ path: [/^\/auth/] }));
app.use(router.routes());
app.listen(3000, () => {
  console.log("启动成功！http://localhost:3000");
});
