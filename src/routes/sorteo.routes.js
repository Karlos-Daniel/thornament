import { Router } from "express";
import { methods as sorteoController } from "../controllers/sorteos.controller";
const router = Router();

router.get("/sorteo",sorteoController.getSorteos);
router.post("/crear/sorteo",sorteoController.addSorteo);
router.get("/buscar/sorteo/:id",sorteoController.getSorteo);
router.delete("/borrar/sorteo/:id",sorteoController.deleteSorteo);
router.put("/editar/sorteo/:id",sorteoController.updateSorteo);

export default router;