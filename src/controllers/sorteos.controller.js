import {getConnection} from "./../database/database";

const getSorteos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT idsorteo,nombre,descripcion FROM sorteo");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getSorteo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT idsorteo,nombre,descripcion FROM sorteo WHERE idsorteo=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addSorteo=async(request,response)=>{
    try{
        const {nombre,descripcion}=request.body;
        const juego ={nombre,descripcion};
        const connection=await getConnection();
        const result = await connection.query("INSERT INTO sorteo SET ?", juego);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteSorteo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM sorteo WHERE idsorteo=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateSorteo=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion}=request.body;
        const connection=await getConnection();
        const juego = {nombre,descripcion};
        const result = await connection.query("UPDATE sorteo SET ? WHERE idsorteo = ?",[juego,id]);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getSorteos,
    getSorteo,
    deleteSorteo,
    updateSorteo,
    addSorteo
};