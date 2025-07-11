import express from "express";
import bookRouter from "./Routers/Books.js"

const app = express();
let port = 4000;

app.use(express.json());

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} request made to ${url}`);
  next();
});

app.use("/books", bookRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
