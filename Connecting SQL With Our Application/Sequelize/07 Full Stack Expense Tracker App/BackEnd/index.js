import express from "express";
import cors from "cors";
import "./Models/index.js";
import expensesRouter from "./Routers/expensesRouter.js";

const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.use("/expenses", expensesRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
