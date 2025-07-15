import express from "express";
import syncModels from "./initDB.js";
import usersRouter from "./Routers/usersRouter.js";
import busesRouter from "./Routers/busesRouter.js";

const app = express();
const port = 3000;

await syncModels();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/buses", busesRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
