import express from "express";
import studentsRouter from "./Routers/Students.js"
import coursesRouter from "./Routers/Courses.js"

const app = express();
let port = 4000;

app.use(express.json());

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} request made to ${url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
})

app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
