import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
});

export default Comment;
