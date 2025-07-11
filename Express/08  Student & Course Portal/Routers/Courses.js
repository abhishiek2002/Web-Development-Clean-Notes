import { Router } from "express";

// course data

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

const router = Router();

router.get("/", (req, res) => {
  let str = courses.map((course) => course.name);
  str = str.join(", ");

  res.send(`Courses:${str}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let courseName, courseDescription;

  for (const course of courses) {
    if (course.id == id) {
      courseName = course.name;
      courseDescription = course.description;
    }
  }

  if (courseName) {
    res.send(`Course:${courseName}, Description:${courseDescription}`);
  } else {
    res.send("Course not found");
  }
});

export default router;
