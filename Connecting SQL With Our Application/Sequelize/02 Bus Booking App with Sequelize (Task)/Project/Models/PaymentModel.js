import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM(["Paid", "Not Paid"]),
  },
});

export default booking;
