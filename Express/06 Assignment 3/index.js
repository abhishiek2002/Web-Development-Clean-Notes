import express from "express";
import productsRouter from "./Routers/Products.js";
import categoriesRouter from "./Routers/Categories.js";

const app = express();
let port = 4000;

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} request made to ${url}`);
  next();
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
