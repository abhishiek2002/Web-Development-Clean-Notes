import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  link: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    defaultValue: "No description",
  },
});

export default Post;
