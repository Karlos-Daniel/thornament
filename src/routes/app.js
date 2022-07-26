import Express from "express";
import morgan from "morgan";
const cors = require('cors');
import juegosRoutes from "./juego.routes";
import rolRoutes from "./rol.routes";
import usuarioRoutes from "./usuario.routes";
import sorteoRoutes from "./sorteo.routes";
import torneoRoutes from "./torneos.routes";
import loginRoutes from "./login.routes";
import equipoRoutes from "./equipo.routes";
const keys = require("../controllers/keys.controller")
const app=Express();

//settings
    app.set("port",4000);
    app.set('key',keys.key);
//Middlewares
    app.use(morgan("dev"));
    app.use(Express.json());
    app.use(cors());
   
    app.use(Express.urlencoded({extended:false}));

    // app.use(session({
    //     secret:'mysecretkey',
    //     resave: false,
    //     saveUninitialized: false
    // }))
  

//Routes
app.use(juegosRoutes);
app.use(rolRoutes);
app.use(usuarioRoutes);
app.use(sorteoRoutes);
app.use(loginRoutes);
app.use(torneoRoutes);
app.use(equipoRoutes);

export default app;