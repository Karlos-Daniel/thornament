import { Router } from "express";
import { methods as equipoController } from "../controllers/equipos.controller";
const router = Router();

router.get("/equipos",equipoController.getEquipos);
router.get("/buscar/equipo/:id",equipoController.getEquipo);
router.post("/crear/equipo",equipoController.addEquipo);
router.delete("/borrar/equipo/:id",equipoController.deleteEquipo);
router.put("/editar/equipo/:id",equipoController.updateEquipo);

export default router;