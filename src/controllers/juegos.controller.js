import {getConnection} from "./../database/database";

const getJuegos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT idjuego,nombre,descripcion FROM juego");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getJuego=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT idjuego,nombre,descripcion FROM juego WHERE idjuego=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addJuego=async(request,response)=>{
    try{
        const {nombre,descripcion}=request.body;
        const juego ={nombre,descripcion};
        const connection=await getConnection();
        const result = await connection.query("INSERT INTO juego SET ?", juego);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteJuego=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM juego WHERE idjuego=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateJuego=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion}=request.body;
        const connection=await getConnection();
        const juego = {nombre,descripcion};
        const result = await connection.query("UPDATE juego SET ? WHERE idjuego = ?",[juego,id]);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const nombresJuegos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT nombre FROM juego ORDER BY idjuego");
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

export const methods={
    getJuegos,
    getJuego,
    deleteJuego,
    updateJuego,
    nombresJuegos,
    addJuego
};