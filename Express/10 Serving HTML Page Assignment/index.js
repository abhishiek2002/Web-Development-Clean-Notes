import express from "express";
import productsRouter from "./Routers/Products.js";
import usersRouter from "./Routers/Users.js";
import cartRouter from "./Routers/Cart.js"

const app = express();
let port = 4000;

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Ecommerce Portal API!");
});

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/cart", cartRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}/api`)
);
