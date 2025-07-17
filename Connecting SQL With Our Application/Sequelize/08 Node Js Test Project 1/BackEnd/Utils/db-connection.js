import { Sequelize } from "sequelize";

const sequelize = new Sequelize("socialmedia", "root", "Abhishek@2002", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection is established");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
})();

export default sequelize;
