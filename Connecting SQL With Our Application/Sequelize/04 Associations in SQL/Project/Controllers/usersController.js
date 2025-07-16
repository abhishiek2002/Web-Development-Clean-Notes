import { User, Post } from "../Models/index.js";

async function addUser(req, res) {
  const { name, email } = req.body;

  try {
    const user = await User.create({ name, email });
    res.status(200).json({
      success: true,
      message: "User has been added",
      data: user,
    });
  } catch (error) {
    console.log("Error while adding user", error);
    res.status(502).json({
      success: false,
      error: error,
    });
  }
}

async function addPost(req, res) {
  const { id } = req.params;

  try {
    const post = await Post.create({ UserId: id });
    res.status(200).json({
      success: true,
      message: "Post has been created",
      data: post,
    });
  } catch (error) {
    console.log("Error while creating post", error);
    res.status(502).json({
      success: false,
      error: error,
    });
  }
}

export { addUser, addPost };
