import User from "./UserModel.js";
import Post from "./PostModel.js";

// one to many association

User.hasMany(Post);
Post.belongsTo(User);

export { User, Post };
