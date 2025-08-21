import { Router } from "express";
import {
  getTableData,
  createTable,
  insertRow,
  getTablesName,
  getColumnsName,
  deleteRecord
} from "../Controllers/tablesController.js";

const router = Router();

router.get("/", getTablesName);
router.get("/columns/:table", getColumnsName);
router.get("/:table", getTableData);
router.post("/insert/:table", insertRow);
router.post("/create/:table", createTable);
router.delete('/delete/:table/:id', deleteRecord);

export default router;
