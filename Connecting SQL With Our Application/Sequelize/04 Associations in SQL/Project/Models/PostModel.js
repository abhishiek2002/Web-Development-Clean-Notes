import sequelize from "../Utils/db-connection.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Post;
