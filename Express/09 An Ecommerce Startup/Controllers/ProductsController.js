// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".

const getProducts = (req, res) => {
  res.send("Fetching all products");
};

const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

const addProduct = (req, res) => {
  res.send("Adding a new product");
};

export { getProducts, getProductById, addProduct };
