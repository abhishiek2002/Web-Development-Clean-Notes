import express from "express";
import syncModels from "./initDB.js";
import studentRouter from "./Routers/studentRouter.js";

const app = express();
const port = 3000;

await syncModels();

app.use(express.json());

app.use("/students", studentRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
