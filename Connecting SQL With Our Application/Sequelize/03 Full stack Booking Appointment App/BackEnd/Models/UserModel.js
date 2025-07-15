import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const user = sequelize.define("User", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true
  }
});


export default user;
