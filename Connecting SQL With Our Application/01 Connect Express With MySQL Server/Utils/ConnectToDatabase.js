import mysql from "mysql2";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abhishek@2002",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connection has been created");

  const createQuery = `create table if not exists students (
    id int auto_increment primary key,
    name varchar(50),
    email varchar(50)
  )`;

  connection.execute(createQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }

    console.log("Table is created");
  });
});

export { connection };
