import { response } from "express";
import {getConnection} from "./../database/database";

const getEquipos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM equipo");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getEquipo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM equipo WHERE idequipo=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addEquipo=async(request,response)=>{

    try{
        const {juego,nombre}=request.body;
        
        const connection=await getConnection();
        const result = 
            await connection.query(`INSERT INTO equipo (juego_idjuego,nombre) 
            VALUE(${juego},"${nombre}");`);    
    response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteEquipo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM equipo WHERE idequipo=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateEquipo=async(request,response)=>{
    try{
        const {id}= request.params;
        const {juego,nombre}=request.body;
        const connection=await getConnection();
        const result = 
            await connection.query(`UPDATE equipo SET juego_idjuego=${juego},nombre=${nombre}`);
    
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getEquipos,
    getEquipo,
    addEquipo,
    deleteEquipo,
    updateEquipo
}