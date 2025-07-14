import { connection as db } from "../Utils/ConnectToDatabase.js";

async function getBusesFromTable(req, res) {
  const { seats } = req.params;
  try {
    const [rows] = seats
      ? await db.execute("SELECT * FROM Buses where availableSeats >= ?", [
          seats,
        ])
      : await db.execute("SELECT * FROM Buses");
    res.status(200).json({
      success: true,
      data: rows,
      message: `${rows.length} buses found`,
    });
  } catch (error) {
    console.log("Error while fetching buses from buses table", error);
    res.status(500).json({
      success: false,
      errorMessage: error,
    });
  }
}

async function insertToTable(req, res) {
  const { busNumber, totalSeats, availableSeats } = req.body;

  try {
    await db.execute(
      "INSERT INTO Buses(busNumber, totalSeats, availableSeats) Values (?,?,?)",
      [busNumber, totalSeats, availableSeats]
    );
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
  //   const { email, name, id } = req.body;
  //   try {
  //     await db.execute("UPDATE Users set email = ?, name = ? where id = ?", [
  //       email,
  //       name,
  //       id,
  //     ]);
  //     res.status(200).json({
  //       success: true,
  //       message: "1 row affected",
  //     });
  //   } catch (error) {
  //     console.log("Error while inserting into user table");
  //     res.status(202).json({
  //       success: false,
  //       errorMessage: error,
  //     });
  //   }
}

async function deleteRowOfTable(req, res) {
  //   const { id } = req.body;
  //   try {
  //     await db.execute("DELETE FROM Users where id = ?", [id]);
  //     res.status(200).json({
  //       success: true,
  //       message: "1 row deleted",
  //     });
  //   } catch (error) {
  //     console.log("Error while deleting row of user table");
  //     res.status(202).json({
  //       success: false,
  //       errorMessage: error,
  //     });
  //   }
}

export { getBusesFromTable, insertToTable, updateToTable, deleteRowOfTable };
