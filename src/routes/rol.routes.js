import { Router } from "express";
import { methods as rolController } from "../controllers/rol.controller";
const router = Router();

router.get("/rol",rolController.getRol);
router.post("/crear/rol",rolController.addRol);
router.get("/buscar/rol/:id",rolController.getRol);
router.delete("/borrar/rol/:id",rolController.deleteRol);
router.put("/editar/rol/:id",rolController.updateRol);

export default router;