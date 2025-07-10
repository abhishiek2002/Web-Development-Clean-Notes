import express from "express";
import orderRouter from "./Routers/Orders.js";
import userRouter from "./Routers/Users.js"

const app = express();
let port = 3000;

app.use("/welcome", (req, res, next) => {
  console.log("Authenticated");
});

app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
