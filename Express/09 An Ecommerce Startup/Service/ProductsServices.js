// 📦 Deliverables
// A productService.js file containing logic for:
// Getting all products
// Getting a single product by ID
// Adding a new product
// Updated productController.js file calling the service functions.
// Verified endpoints using Postman:
// GET /products → "Fetching all products"
// GET /products/1 → "Fetching product with ID: 1"
// POST /products → "Adding a new product"
import path from "path";

const __dirname = "D:\\Web-Development-Clean-Notes\\Express\\09 An Ecommerce Startup\\Service";

const getAllProducts = (res) => {
  res.sendFile(path.join(__dirname, "..", "View", "product.html"));
};

const getSingleProductById = (params, res) => {
  const { id } = params;
  res.send(`Fetching product with ID: ${id}`);
};

const addOneProduct = (res) => {
  res.send("Adding a new product");
};

export { getAllProducts, getSingleProductById, addOneProduct };
