import { Router } from "express";
import { methods as juegosController } from "../controllers/juegos.controller";
const router = Router();

router.get("/juegos",juegosController.getJuegos);
router.post("/crear/juegos",juegosController.addJuego);
router.get("/buscar/juegos/:id",juegosController.getJuego);
router.delete("/borrar/juegos/:id",juegosController.deleteJuego);
router.put("/editar/juegos/:id",juegosController.updateJuego);

export default router;