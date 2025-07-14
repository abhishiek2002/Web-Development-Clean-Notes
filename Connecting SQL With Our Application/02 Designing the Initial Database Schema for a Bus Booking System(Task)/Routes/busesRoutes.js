import { Router } from "express";
import { deleteRowOfTable, getBusesFromTable, insertToTable, updateToTable } from "../Controllers/busControllers.js";

const router = Router();

router.get('/', getBusesFromTable);

router.get('/available/:seats', getBusesFromTable);
 

router.post('/add', insertToTable);

// router.put('/update', updateToTable);

// router.delete('/delete', deleteRowOfTable);

export default router;