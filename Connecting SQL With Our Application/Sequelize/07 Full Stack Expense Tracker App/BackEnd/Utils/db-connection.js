import { Sequelize } from "sequelize";

const sequelize = new Sequelize("expense", "root", "Abhishek@2002", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully");
  } catch (error) {
    console.log("Error on connnecting to database", error.message);
  }
})();

export default sequelize;
