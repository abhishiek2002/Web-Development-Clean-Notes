import sequelize from "./Utils/db-connection.js";
import user from "./Models/UserModel.js";
import bus from "./Models/BusModel.js"
import booking from "./Models/BookingModel.js";
import payment from "./Models/PaymentModel.js"

const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log("Models are synchronized successfully");
  } catch (error) {
    console.log("Error in syncronizing models", error);
  }
};

export default syncModels;
