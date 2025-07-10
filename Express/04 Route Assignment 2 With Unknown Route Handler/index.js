import express from "express";
import productsRouter from "./Routers/Products.js";
import categoriesRouter from "./Routers/Categories.js";

const app = express();
let port = 3000;

app.use((req, res, next) => {
  console.log("Authenticated");
  next();
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

// not using wildcard because i am using express@5.1.0 , and this is throwing error in wildcard
// app.use("*", (req, res) => {
//   res.status(404).send("<h1>404 - Page Not Found</h1>");
// });

// instead i am using this

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
