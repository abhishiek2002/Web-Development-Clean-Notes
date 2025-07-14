import db from "../Utils/db-connection.js";

async function getStudents(req, res) {
  const { id } = req.params;
  try {
    const [row] = id
      ? await db.execute("SELECT * FROM Students where id = ?", [id])
      : await db.execute("SELECT * FROM Students");
    console.log(row);
    res.status(200).json({
      success: true,
      data: row,
      message: id ? `student found` : `${row.length} students found`,
    });
  } catch (error) {
    console.log("Error while fetching students data", error);
    res.status(502).json({
      success: false,
      message: "Error while fetching students data",
    });
  }
}

async function addStudent(req, res) {
  const { name, email, age } = req.body;
  try {
    await db.execute(
      "INSERT INTO Students(name, email, age) VALUES (?, ?, ?)",
      [name, email, age]
    );
    res.status(200).json({
      success: true,
      message: `Student is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding student", error);
    res.status(502).json({
      success: false,
      message: "Error while adding student",
    });
  }
}

async function updateStudent(req, res) {
  const { name, email, age } = req.body;
  const { id } = req.params;
  try {
    const [row] = await db.execute(
      "UPDATE Students SET name=?, email=?, age=? WHERE id = ?",
      [name, email, age, id]
    );

    res.status(200).json({
      success: true,
      message:
        row.affectedRows === 0
          ? `Student with id ${id} is not found`
          : `Student info with id ${id} is updated successfully`,
    });
  } catch (error) {
    console.log("Error while updating student info", error);
    res.status(502).json({
      success: false,
      message: "Error while updating student info",
    });
  }
}

async function removeStudent(req, res) {
  const { id } = req.params;
  try {
    const [row] = await db.execute("DELETE FROM Students WHERE id = ?", [id]);

    res.status(200).json({
      success: true,
      message:
        row.affectedRows === 0
          ? `Student with id ${id} is already does not exist`
          : `Student with id ${id} is removed successfully`,
    });
  } catch (error) {
    console.log("Error while removing student info", error);
    res.status(502).json({
      success: false,
      message: "Error while removing student info",
    });
  }
}

export { getStudents, addStudent, updateStudent, removeStudent };
