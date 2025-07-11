// GET /users returns: "Fetching all users".
// POST /users returns: "Adding a new user".
// GET /users/:id returns: "Fetching user with ID: id".

const getUsers = (req, res) => {
  res.send("Fetching all users");
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
};

const addUser = (req, res) => {
  res.send("Adding a new user");
};

export { getUsers, getUserById, addUser };
