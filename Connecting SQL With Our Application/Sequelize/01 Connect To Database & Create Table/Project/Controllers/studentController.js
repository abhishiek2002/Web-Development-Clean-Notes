import student from "../Models/StudentModel.js";

async function getStudents(req, res) {
  const { id } = req.params;
  try {
    const students = id
      ? await student.findAll({
          where: {
            id: id,
          },
        })
      : await student.findAll();

    res.status(200).json({
      success: true,
      message:
        students.length === 0
          ? `no student found`
          : `${students.length} students found`,
      data: students,
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
    const st = await student.create({ name, email, age });

    res.status(200).json({
      success: true,
      data: st,
      message: `Student is added successfully`,
    });
  } catch (error) {
    console.log("Error while adding student:-", error.errors[0].message);
    res.status(502).json({
      success: false,
      message: error.errors[0].message,
    });
  }
}

async function updateStudent(req, res) {
  const { name, email, age } = req.body;
  const { id } = req.params;
  try {
    const st = await student.update(
      { name, email, age },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      success: true,
      message:
        st === 0
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
    const st = await student.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      success: true,
      message:
        st === 0
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
