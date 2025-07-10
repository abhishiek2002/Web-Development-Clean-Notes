import express from "express";
import welcome from "./Middlewares/welcome.js";

const app = express();

app.use('/welcome',welcome);

app.use((req, res, next) => {
    console.log("Testing another middleware");
    next();
} )

app.get('/welcome', (req, res) => {
    const value = req.user;
    res.send(`<h1>Welcome, ${value}!</h1>`);
})

app.listen(3000, () =>
  console.log("Server is running at http://localhost:3000")
);
