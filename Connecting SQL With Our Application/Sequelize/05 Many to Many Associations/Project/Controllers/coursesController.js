import { Course, Student } from "../Models/index.js";
import { Op } from "sequelize";

async function addCourse(req, res) {
  const { name } = req.body;

  try {
    const course = await Course.create({ name });
    res.status(200).json({
      success: true,
      message: "Course has been added",
      data: course,
    });
  } catch (error) {
    console.log("Error while adding course", error.message);
    res.status(502).json({
      success: false,
      error: error.message,
    });
  }
}

async function addStudentToCourse(req, res) {
  // {
  //     studentId: id,
  //     coursesId: [1,2]
  // }
  const { studentId, coursesId } = req.body;

  try {
    const student = await Student.findByPk(studentId);
    const courses = await Course.findAll({
      where: {
        id: {
          [Op.in]: coursesId,
        },
      },
    });

    const result = await student.addCourses(courses);

    const updatedStudent = await Student.findByPk(studentId, {include: Course});

    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} has been enrolled into courses with id ${coursesId}`,
      data: updatedStudent,
    });
  } catch (error) {
    res.status(502).json(error.message);
  }
}

export { addCourse, addStudentToCourse };
