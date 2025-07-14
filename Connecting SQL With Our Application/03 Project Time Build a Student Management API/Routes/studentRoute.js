import { Router } from "express";
import {
  addStudent,
  getStudents,
  removeStudent,
  updateStudent,
} from "../Controller/studentController.js";

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", removeStudent);

export default router;
