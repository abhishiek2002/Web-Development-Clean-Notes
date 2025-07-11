import { Router } from "express";

// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".

const router = Router();

router.get("/", (req, res) => {
  res.send("Fetching all products");
});

router.post("/", (req, res) => {
  res.send("Adding a new product");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
});

export default router;
