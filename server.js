const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "development";
const app = next({ dev });
const handle = app.getRequestHandler();
const getRoutes = require("routes");
const routes = getRoutes();

app.use(expres.static("static"));
app
  .prepare()
  .then(() => {
    const server = express();
    server.get("/store/:id", (req, res) => {
      const actualPage = "/store";
      console.log(req.params.id);
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
      return handle(req, res);
    });
    // server.get("/", (req, res) => {
    //   return handle(req, res);
    // });
    // server.get("*", (req, res) => {
    //   const parsedUrl = parse(req.url, true);
    //   const { pathname, query = {} } = parsedUrl;
    //   const route = routes[pathname];
    //   if (route) {
    //     return app.render(req, res, route.page, query);
    //   }
    //   return handle(req, res);
    // });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
