import { Router } from "express";
import { getProducts, getProductById, addProduct } from "../Controllers/ProductsController.js"

const router = Router();

router.get("/", getProducts);

router.post("/", addProduct);

router.get("/:id", getProductById);

export default router;
