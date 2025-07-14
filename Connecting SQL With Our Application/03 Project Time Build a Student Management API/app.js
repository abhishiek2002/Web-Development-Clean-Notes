import express from "express";
import db from "./Utils/db-connection.js";
import initializeDB from "./initDB.js";
import studentRouter from "./Routes/studentRoute.js";

const app = express();
await initializeDB();
const port = 3000;

app.use(express.json());

app.use("/students", studentRouter);

app.listen(port, () => `Server is running at http://localhost:${port}`);
