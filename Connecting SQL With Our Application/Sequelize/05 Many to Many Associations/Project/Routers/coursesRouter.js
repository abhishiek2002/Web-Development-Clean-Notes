import { Router } from "express";
import { addCourse, addStudentToCourse } from "../Controllers/coursesController.js";

const router = Router();

router.post("/add", addCourse);
router.post("/addStudentToCourse", addStudentToCourse)

export default router;
