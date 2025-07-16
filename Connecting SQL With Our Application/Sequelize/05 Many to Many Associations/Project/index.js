import express from "express";
import "./Models/index.js";
import sequelize from "./Utils/db-connection.js";
import studentsRouter from "./Routers/studentsRouter.js";
import coursesRouter from "./Routers/coursesRouter.js";

const app = express();
const port = 3000;

sequelize
  .sync()
  .then(() => console.log("Synchronization successfull"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
