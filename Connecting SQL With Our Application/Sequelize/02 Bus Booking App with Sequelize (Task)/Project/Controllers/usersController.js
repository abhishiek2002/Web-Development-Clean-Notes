import user from "../Models/UserModel.js";

async function getUsers(req, res) {
  try {
    const users = await user.findAll();

    res.status(200).json({
      success: true,
      message:
        users.length === 0 ? `no user found` : `${users.length} users found`,
      data: users,
    });
  } catch (error) {
    console.log("Error while fetching users data", error);
    res.status(502).json({
      success: false,
      message: "Error while fetching users data",
    });
  }
}

async function addUser(req, res) {
  const { name, email } = req.body;
  try {
    const data = await user.create({ name, email });

    res.status(200).json({
      success: true,
      data: data,
      message: `User is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding user:-", error.errors[0].message);
    res.status(502).json({
      success: false,
      message: error.errors[0].message,
    });
  }
}

export { getUsers, addUser };
