import sequelize from "../Utils/db-connection.js";
import { DataTypes } from "sequelize";

const StudentCourse = sequelize.define("StudentCourse", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default StudentCourse;
