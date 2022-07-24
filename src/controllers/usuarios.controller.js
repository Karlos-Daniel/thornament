import {getConnection} from "./../database/database";
const bcrypt=require("bcryptjs");

const getUsuarios=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM usuario");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getUsuario=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM usuario WHERE idusuario=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addUsuario=async(request,response)=>{

    try{
        const {nombre1,nombre2,apellido1,apellido2,email,cumple,celular,contra} = request.body;
        const passwordHash = await bcrypt.hash(contra,10);
        const connection = await getConnection();
        const result = await connection.query(`INSERT INTO usuario (rol_idrol,nombre1,nombre2,apellido1,apellido2,email,cumple,celular,contra) VALUE(1,"${nombre1}","${nombre2}","${apellido1}","${apellido2}","${email}","${cumple}","${celular}","${passwordHash}");`);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteUsuario=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE idusuario=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateUsuario=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre1,nombre2,apellido1,apellido2,email,cumple,celular,contra}=request.body;
        const usuario ={nombre1,nombre2,apellido1,apellido2,email,cumple,celular,contra};
        const connection=await getConnection();

        if(nombre2==""){
            nombre2="null";
        }

        const result = await connection.query(`UPDATE usuario SET nombre1="${nombre1}",nombre2="${nombre2}",apellido1="${apellido1}",apellido2="${apellido2}",email="${email}",cumple="${cumple}",celular="${celular}",contra="${contra}" WHERE idusuario="${id}";`);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getUsuario,
    getUsuarios,
    deleteUsuario,
    updateUsuario,
    addUsuario
};