import express from "express";
import cors from "cors";
import tablesRouter from "./Routers/tablesRouter.js";
import sequelize from "./Utils/db-connection.js";

const app = express();
const port = 3000;

app.use(cors());


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/tables", tablesRouter);

app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
