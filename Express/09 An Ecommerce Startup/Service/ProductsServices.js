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

const getAllProducts = (res) => {
  res.send("Fetching all products");
};

const getSingleProductById = (params, res) => {
  const { id } = params;
  res.send(`Fetching product with ID: ${id}`);
};

const addOneProduct = (res) => {
  res.send("Adding a new product");
};

export { getAllProducts, getSingleProductById, addOneProduct };
