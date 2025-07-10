import express from "express";

const app = express();

app.use('/', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})

app.listen(3000, () => console.log("Server is up and running on port 3000! Ready to handle requests."));
