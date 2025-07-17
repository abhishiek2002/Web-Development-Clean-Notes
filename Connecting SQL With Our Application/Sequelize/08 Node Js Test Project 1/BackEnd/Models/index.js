import sequelize from "../Utils/db-connection.js";
import Post from "./PostModel.js";
import Comment from "./CommentModel.js";

// one to many association

Post.hasMany(Comment);
Comment.belongsTo(Post);



(async () => {
  try {
    await sequelize.sync();;
    console.log("Synchronzation is established");
  } catch (error) {
    console.log("Error while Synchronzation to database", error);
  }
})();

export { Post, Comment };
