import { Router } from "express";
import { fetchCart, addProductToCart } from "../Controllers/CartController.js";

const router = Router();

router.get("/:userId", fetchCart);

router.post("/:userId", addProductToCart);

export default router;
