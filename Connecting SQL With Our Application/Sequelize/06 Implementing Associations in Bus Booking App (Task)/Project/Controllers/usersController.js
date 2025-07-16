import Booking from "../Models/BookingModel.js";
import User from "../Models/UserModel.js";

async function getUsers(req, res) {
  const { id } = req.params;

  try {
    const users = id
      ? await User.findByPk(id, { include: Booking })
      : await User.findAll();

    res.status(200).json({
      success: true,
      message:
        id ? `User found` : `${users.length} users found`,
      data: users,
    });
  } catch (error) {
    console.log("Error while fetching users data", error);
    res.status(502).json({
      success: false,
      message: error,
    });
  }
}

async function addUser(req, res) {
  const { name, email } = req.body;
  try {
    const data = await User.create({ name, email });

    res.status(200).json({
      success: true,
      data: data,
      message: `User is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding User:-", error);
    res.status(502).json({
      success: false,
      message: error,
    });
  }
}

export { getUsers, addUser };
