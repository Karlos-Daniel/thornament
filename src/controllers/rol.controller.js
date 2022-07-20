import {getConnection} from "./../database/database";

const getRol=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM rol");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getRoles=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM rol WHERE idrol=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addRol=async(request,response)=>{
    try{
        const {nombre,descripcion}=request.body;
        const rol ={nombre,descripcion};
        const connection=await getConnection();
        const result = await connection.query("INSERT INTO rol SET ?", rol);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteRol=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM rol WHERE idrol=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateRol=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion}=request.body;
        const connection=await getConnection();
        const rol = {nombre,descripcion};
        const result = await connection.query("UPDATE rol SET ? WHERE idrol = ?",[rol,id]);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getRoles,
    getRol,
    deleteRol,
    updateRol,
    addRol
};