// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".

import {
  getAllProducts,
  getSingleProductById,
  addOneProduct,
} from "../Service/ProductsServices.js";

const getProducts = (req, res) => {
  getAllProducts(res);
};

const getProductById = (req, res) => {
  getSingleProductById(req.params, res);
};

const addProduct = (req, res) => {
  addOneProduct(res);
};

export { getProducts, getProductById, addProduct };
