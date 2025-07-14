import { Router } from "express";
import { deleteRowOfTable, insertToTable, updateToTable } from "../Controllers/userControllers.js";

const router = Router();

router.post('/add', insertToTable);

router.put('/update', updateToTable);

router.delete('/delete', deleteRowOfTable);

export default router;