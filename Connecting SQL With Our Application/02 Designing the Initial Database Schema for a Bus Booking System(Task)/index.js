import express from "express";
import intializeDatabase from "./initDB.js";
import { connection } from "./Utils/ConnectToDatabase.js";
import userRoutes from "./Routes/usersRoutes.js"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

await intializeDatabase();

app.use('/users', userRoutes);

app.listen(3000, () => 
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  )
);
