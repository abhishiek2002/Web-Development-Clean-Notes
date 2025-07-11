import { Router } from "express";

// student data

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

const router = Router();

router.get("/", (req, res) => {
  let str = students.map((student) => student.name);
  str = str.join(", ");

  res.send(`Students:${str}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let studentName;
  for (const student of students) {
    if (student.id == id) {
      studentName = student.name;
    }
  }
  if (studentName) {
    res.send(`Student:${studentName}`);
  } else {
    res.send("Student not found");
  }
});

export default router;
