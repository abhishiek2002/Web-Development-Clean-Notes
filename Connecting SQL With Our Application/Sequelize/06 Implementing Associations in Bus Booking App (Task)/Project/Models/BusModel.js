import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const Bus = sequelize.define("Bus", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  busNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
  },
});

export default Bus;
