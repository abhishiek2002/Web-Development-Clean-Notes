// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".

import { sendErrorResponse } from "../utils/response.js";

const getProducts = (req, res) => {
  res.send("All products are listed");
};

const getProductById = (req, res) => {
  const { id } = req.params;

  if (id > 100) {
    return sendErrorResponse(res, {
      message: "Product is not found",
      statusCode: 404,
    });
  }

  res.send(`Fetching product with ID: ${id}`);
};

const addProduct = (req, res) => {
  res.send("Adding a new product");
};

export { getProducts, getProductById, addProduct };
