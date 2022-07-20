import Express from "express";
import morgan from "morgan";
const cors = require('cors');
import juegosRoutes from "./juego.routes";
import rolRoutes from "./rol.routes";
import usuarioRoutes from "./usuario.routes";
import sorteoRoutes from "./sorteo.routes";
const session = require('express-session');
const app=Express();

//settings
    app.set("port",4000);

//Middlewares
    app.use(morgan("dev"));
    app.use(Express.json());
    app.use(cors());
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


export default app;