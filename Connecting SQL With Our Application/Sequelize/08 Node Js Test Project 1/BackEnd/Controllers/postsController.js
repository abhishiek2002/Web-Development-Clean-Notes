import { Post } from "../Models/index.js";

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll();
    res.status(200).json({
      success: true,
      message: `${posts.length} posts found`,
      data: posts,
    });
  } catch (error) {
    res.status(502).json(error);
  }
}

async function addPost(req, res) {
  const { link, description } = req.body;
  try {
    const post = await Post.create({ link, description });

    res.status(200).json({
      success: true,
      message: `Post created successfully`,
      data: post,
    });
  } catch (error) {
    res.status(502).json(error);
  }
}

export { getPosts, addPost };
