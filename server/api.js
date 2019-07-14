const koa = require("koa");
const app = new koa();
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");
var router = new Router().prefix("/api");

app.keys = ["some secret", "another secret"];

const goods = [
  { id: 1, text: "web全栈架构师", price: 1000 },
  { id: 2, text: "python架构师", price: 1000 }
];

router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  };
});

router.get("/detail", ctx => {
  console.log(ctx);
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  };
});

router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "ryhn" && user.password === "123") {
    const token = "a mock token";
    ctx.cookies.set("token", token, {
      httpOnly: true,
      sameSite: true
    });
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
});
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => console.log("api服务启动"));
