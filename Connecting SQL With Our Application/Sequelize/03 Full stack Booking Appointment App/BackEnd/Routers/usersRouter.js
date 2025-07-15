import { Router } from "express";
import {
  getUsers,
  addUser,
  removeUser,
  updateUser,
} from "../Controllers/usersController.js";

const router = Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.delete("/delete/:id", removeUser);
router.put("/edit/:id", updateUser);

export default router;
