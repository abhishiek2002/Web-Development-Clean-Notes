// GET /users returns: "Fetching all users".
// POST /users returns: "Adding a new user".
// GET /users/:id returns: "Fetching user with ID: id".

import { sendErrorResponse, sendResponse } from "../utils/response.js";

const getUsers = (req, res) => {
  res.send("Fetching all users");
};

const getUserById = (req, res) => {
  const { id } = req.params;

  if (id > 10) {
    return sendErrorResponse(res, { statusCode: 404, message: "User not found" });
  }
  return sendResponse(res, id, 200, `Fetching user with ID: ${id}`);
};

const addUser = (req, res) => {
  res.send("Adding a new user");
};

export { getUsers, getUserById, addUser };
