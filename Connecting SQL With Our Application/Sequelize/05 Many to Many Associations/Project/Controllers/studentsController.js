import { Student, StudentCourse } from "../Models/index.js";

async function addStudent(req, res) {
  const { name, email } = req.body;

  try {
    const student = await Student.create({ name, email });
    res.status(200).json({
      success: true,
      message: "Student has been added",
      data: student,
    });
  } catch (error) {
    console.log("Error while adding student", error);
    res.status(502).json({
      success: false,
      error: error,
    });
  }
}


export { addStudent };
