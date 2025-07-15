import express from "express";
import syncModels from "./initDB.js";

const app = express();
const port = 3000;

await syncModels();

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
