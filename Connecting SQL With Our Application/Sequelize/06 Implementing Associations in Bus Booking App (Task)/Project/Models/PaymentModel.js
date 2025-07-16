import { DataTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

const Payment = sequelize.define("Payment", {
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

export default Payment;
