// const {promisify} = require('util')
import { Router } from "express";
import { methods as loginController } from "../controllers/login.Controller";
const router = Router();

router.post("/login",loginController.loginUsuario)