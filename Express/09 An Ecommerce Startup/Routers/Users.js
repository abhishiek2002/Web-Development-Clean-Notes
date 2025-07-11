import { Router } from "express";

// GET /users returns: "Fetching all users".
// POST /users returns: "Adding a new user".
// GET /users/:id returns: "Fetching user with ID: id".

const router = Router();

router.get("/", (req, res) => {
  res.send("Fetching all users");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
});

router.post("/", (req, res) => {
  res.send("Adding a new user");
});

export default router;
