import List from "./ExpenseList.js";
import sequelize from "../Utils/db-connection.js";

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronize successfully");
  } catch (error) {
    console.log("Error while synchronizing", error.message);
  }
})();

export { List };
