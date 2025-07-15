import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection";

const student = sequelize.define("Student", {
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
  },
});

