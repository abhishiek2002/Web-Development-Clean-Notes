import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default booking;

