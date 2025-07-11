// GET /cart/:userId returns: "Fetching cart for user with ID: userId".
// POST /cart/:userId returns: "Adding product to cart for user with ID: userId".

const fetchCart = (req, res) => {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
};

const addProductToCart = (req, res) => {
  const { userId } = req.params;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};

export { fetchCart, addProductToCart };
