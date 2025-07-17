import express from "express";
import cors from "cors";
import "./Models/index.js";
import postsRouter from "./Routers/postsRouter.js";
import commentsRouter from "./Routers/commentsRouter.js";

const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
