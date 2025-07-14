import mysql from "mysql2";

const conn = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "Abhishek@2002",
    database: "testdb",
  })
  .promise();

(async () => {
  try {
    await conn.connect();
    console.log("Connection to database has been created");
  } catch (error) {
    console.log("Error while connecting to database");
  }
})();

export default conn;
