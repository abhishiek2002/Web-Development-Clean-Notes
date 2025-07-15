import { Sequelize } from "sequelize";

const sequelize = new Sequelize("testdb", "root", "Abhishek@2002", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
