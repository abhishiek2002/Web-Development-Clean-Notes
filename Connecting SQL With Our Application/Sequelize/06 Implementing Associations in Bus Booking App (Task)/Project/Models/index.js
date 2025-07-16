import sequelize from "../Utils/db-connection.js";
import User from "./UserModel.js";
import Booking from "./BookingModel.js";
import Bus from "./BusModel.js";
import Payment from "./PaymentModel.js";

// User and Booking , one-to-many association

User.hasMany(Booking);
Booking.belongsTo(User);

// Booking and Payment , one-to-one association

// Booking.hasOne(Payment);
// Payment.belongsTo(Booking);

// Booking and Bus , one-to-one association

Bus.hasMany(Booking);
Booking.belongsTo(Bus);

(async () => {
  try {
    await sequelize.sync();
    console.log("Successfully Synchronize");
  } catch (error) {
    console.log(error);
  }
})();

export { Bus, User, Booking, Payment };
