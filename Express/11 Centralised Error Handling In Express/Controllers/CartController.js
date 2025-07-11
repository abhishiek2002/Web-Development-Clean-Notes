// GET /cart/:userId returns: "Fetching cart for user with ID: userId".
// POST /cart/:userId returns: "Adding product to cart for user with ID: userId".

import { sendErrorResponse, sendResponse } from "../utils/response.js";

const fetchCart = (req, res) => {
  const { userId } = req.params;

  if (userId > 10) {
    return sendErrorResponse(res, { message: "User didn't exist", statusCode: 404 });
  }

  return sendResponse(res, userId, 200, `Fetching cart for user with ID: ${userId}`);
};

const addProductToCart = (req, res) => {
  const { userId } = req.params;

  if (userId > 10) {
    return sendErrorResponse(res, { message: "User didn't exist", statusCode: 404 });
  }

  return sendResponse(
    res,
    userId,
    200,
    `Adding product to cart for user with ID: ${userId}`
  );
};

export { fetchCart, addProductToCart };
