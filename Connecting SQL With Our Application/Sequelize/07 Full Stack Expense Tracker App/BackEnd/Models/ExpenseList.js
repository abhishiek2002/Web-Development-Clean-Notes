import sequelize from "../Utils/db-connection.js";
import { DataTypes } from "sequelize";

const List = sequelize.define("List", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
  },
  category: {
    type: DataTypes.ENUM([
      "Daily Essentials",
      "Housing & Utilities",
      "Transportation",
      "Food & Dining",
      "Entertainment",
    ]),
    allowNull: false,
  },
});

export default List;
