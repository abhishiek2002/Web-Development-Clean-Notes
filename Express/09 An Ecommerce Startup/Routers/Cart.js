import { Router } from "express";

// GET /cart/:userId returns: "Fetching cart for user with ID: userId".
// POST /cart/:userId returns: "Adding product to cart for user with ID: userId".

const router = Router();

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
});

router.post("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`Adding product to cart for user with ID: ${userId}`);
});

export default router;
