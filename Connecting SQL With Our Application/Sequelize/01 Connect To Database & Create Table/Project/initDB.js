import sequelize from "./Utils/db-connection.js";

const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log("Models are synchronized successfully");
  } catch (error) {
    console.log("Error in syncronizing models", error);
  }
};

export default syncModels;
