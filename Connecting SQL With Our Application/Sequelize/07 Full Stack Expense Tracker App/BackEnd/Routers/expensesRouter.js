import { Router } from "express";
import {
  addExpense,
  editExpense,
  getExpenses,
  removeExpense,
} from "../Controllers/expensesController.js";

const router = Router();

router.get("/", getExpenses);
router.post("/add", addExpense);
router.put("/:id/edit", editExpense);
router.delete("/:id/remove", removeExpense);

export default router;
