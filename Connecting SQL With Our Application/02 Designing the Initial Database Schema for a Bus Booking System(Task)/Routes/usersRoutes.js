import { Router } from "express";
import { deleteRowOfTable, getUsersFromTable, insertToTable, updateToTable } from "../Controllers/userControllers.js";

const router = Router();

router.get('/', getUsersFromTable);

router.post('/add', insertToTable);

router.put('/update', updateToTable);

router.delete('/delete', deleteRowOfTable);

export default router;