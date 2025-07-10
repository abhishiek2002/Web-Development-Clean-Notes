import express from "express";

const app = express();
let port = 3000;

app.get("/welcome/:username", (req, res) => {
  const { username } = req.params;
  const { role } = req.query;
  res.send(`<h1>Welcome ${username}, your role is ${role}</h1>`)
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
