import { connection as db } from "../Utils/ConnectToDatabase.js";

async function getUsersFromTable(req, res) {
  try {
    const [rows] = await db.execute("SELECT * FROM Users");
    res.status(200).json({
      success: true,
      data: rows,
      message: `${rows.length} users found`,
    });
  } catch (error) {
    console.log("Error while fetching users from user table", error);
    res.status(500).json({
      success: false,
      errorMessage: error,
    });
  }
}

async function insertToTable(req, res) {
  const { email, name } = req.body;

  try {
    await db.execute("INSERT INTO Users(email, name) Values (?,?)", [
      email,
      name,
    ]);
    res.status(200).json({
      success: true,
      message: "1 row affected",
    });
  } catch (error) {
    console.log("Error while inserting into user table");
    res.status(202).json({
      success: false,
      errorMessage: error,
    });
  }
}

async function updateToTable(req, res) {
  const { email, name, id } = req.body;

  try {
    await db.execute("UPDATE Users set email = ?, name = ? where id = ?", [
      email,
      name,
      id,
    ]);
    res.status(200).json({
      success: true,
      message: "1 row affected",
    });
  } catch (error) {
    console.log("Error while inserting into user table");
    res.status(202).json({
      success: false,
      errorMessage: error,
    });
  }
}

async function deleteRowOfTable(req, res) {
  const { id } = req.body;

  try {
    await db.execute("DELETE FROM Users where id = ?", [id]);
    res.status(200).json({
      success: true,
      message: "1 row deleted",
    });
  } catch (error) {
    console.log("Error while deleting row of user table");
    res.status(202).json({
      success: false,
      errorMessage: error,
    });
  }
}

export {getUsersFromTable, insertToTable, updateToTable, deleteRowOfTable };
