import { Router } from "express";
import {
  getStudents,
  addStudent,
  updateStudent,
  removeStudent,
} from "../Controllers/studentController.js";

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", removeStudent);

export default router;
