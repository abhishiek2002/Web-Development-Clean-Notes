import { Comment, Post } from "../Models/index.js";

async function getComments(req, res) {
  const { id } = req.params;
  try {
    const comments = await Comment.findAll({
      where: {
        PostId: id,
      },
    });
    res.status(200).json({
      success: true,
      message: `${comments.length} comments found`,
      data: comments,
    });
  } catch (error) {
    res.status(502).json(error);
  }
}

async function addComment(req, res) {
  const { id } = req.params; // postId
  const { message } = req.body;
  try {
    const comment = await Comment.create({ message });

    const post = await Post.findByPk(id);

    post.addComment(comment);

    res.status(200).json({
      success: true,
      message: `Comment added successfully`,
      data: comment,
    });
  } catch (error) {
    res.status(502).json(error);
  }
}

export { getComments, addComment };
