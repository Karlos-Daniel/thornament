import {getConnection} from "./../database/database";

const getTorneos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT idtorneo, nombre, FROM torneo");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM torneo WHERE idtorneo=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addTorneo=async(request,response)=>{

    try{
        const {nombre,juego,fecha_inicio,fecha_final,descripcion}=request.body;
        
        const connection=await getConnection();
        const result = 
            await connection.query(`INSERT INTO torneo (juego_idjuego,usuario_idusuario,nombre,fecha_inicio,fecha_final,descripcion) 
            VALUE(${juego},3,"${nombre}","${fecha_inicio}","${fecha_final}","${descripcion}");`);
        
    response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM torneo WHERE idtorneo=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion,fecha_inicio,fecha_final}=request.body;
        const connection=await getConnection();

        const result = 
            await connection.query(`UPDATE torneo SET nombre=${nombre},fecha_inicio=${fecha_inicio},fecha_final=${fecha_final}, descripcion=${descripcion} WHERE idtorneo=${id}`);
    
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getTorneosJuegos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT torneo.idtorneo,torneo.nombre AS nombre_torneo,torneo.descripcion  ,juego.nombre AS nombre_juego, torneo.fecha_inicio, torneo.fecha_final FROM juego,torneo WHERE idjuego=juego_idjuego");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getTorneos,
    getTorneo,
    deleteTorneo,
    updateTorneo,
    getTorneosJuegos,
    addTorneo
};