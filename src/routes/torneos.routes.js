import { Router } from "express";
import { methods as torneosController } from "../controllers/torneos.controller";
const router = Router();

router.get("/torneos",torneosController.getTorneos);
router.post("/crear/torneo",torneosController.addTorneo);
router.get("buscar/torneo/:id",torneosController.getTorneo);
router.delete("/borrar/torneo/:id",torneosController.deleteTorneo);
router.put("/editar/torneo/:id",torneosController.updateTorneo);

export default router;