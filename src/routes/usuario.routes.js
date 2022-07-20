import { Router } from "express";
import { methods as usuarioController } from "../controllers/usuarios.controller";
const router = Router();

router.get("/usuario",usuarioController.getUsuarios);
router.post("/crear/usuario",usuarioController.addUsuario);
router.get("/buscar/usuario/:id",usuarioController.getUsuario);
router.delete("/borrar/usuario/:id",usuarioController.deleteUsuario);
router.put("/editar/usuario/:id",usuarioController.updateUsuario);

export default router;