import express from "express";
import "./Models/index.js";
import usersRouter from "./Routers/usersRouter.js";
import busesRouter from "./Routers/busesRouter.js";
import bookingRouter from "./Routers/bookingsRouter.js"

const app = express();
const port = 3000;


app.use(express.json());

app.use("/users", usersRouter);
app.use("/buses", busesRouter);
app.use("/bookings", bookingRouter);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
