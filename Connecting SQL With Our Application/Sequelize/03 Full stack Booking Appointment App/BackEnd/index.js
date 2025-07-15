import express from "express";
import cors from "cors";
import syncModels from "./initDB.js";
import usersRouter from "./Routers/usersRouter.js";

const app = express();
const port = 3000;

await syncModels();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);

  next();
});

app.use("/users", usersRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
