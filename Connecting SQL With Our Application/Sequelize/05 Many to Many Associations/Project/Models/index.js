import Student from "./StudentModel.js";
import Course from "./CourseModel.js";
import StudentCourse from "./StudentCourseModel.js";

// many to many association

Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });


export { Student, Course, StudentCourse };
