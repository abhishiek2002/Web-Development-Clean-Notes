import express from "express";
import "./Models/index.js";
import sequelize from "./Utils/db-connection.js";
import usersRouter from "./Routers/usersRouter.js"

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

app.use("/users", usersRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
