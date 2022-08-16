const modelUser = require("./models.controller");
import { token } from "morgan";
import {configg} from "dotenv";
import config from "../routes/config"
const bcrypt=require("bcryptjs");
import {getConnection} from "./../database/database";
const jwt = require("jsonwebtoken");


const loginUsuario=async(request,response)=>{
    try{
        const {email,contraseña} = request.body;
        const connection = await getConnection();
        const user = await connection.query(`SELECT contra FROM usuario WHERE email=?`,email);

        if(user.length>0){
        const userid = await connection.query(`SELECT idusuario FROM usuario WHERE email=?`,email);
        const dataContra = user[0].contra;
        const checkContra = await unHash(contraseña,dataContra);
        console.log(checkContra)
        
        if(checkContra===true){
           const userForToken = {
            id: userid[0].idusuario
           }
           const token = jwt.sign(userForToken, process.env.SECRET)
           
           response.send({
            token
            })
        }else{
            response.send({
                "message": "Contraseña incorrecta"
            })
        }}
        else{

            response.send({
                "message": "Email incorrecto"
            })
            response.status(404)
        }
        //console.log(unHash({contra: contraseña},user[0]))
        //console.log({contra: contraseña}==user[0])
        // console.log(checkContra);
        // response.send("hola")
        // response.status(200)

        // if(user.length>0){

        //     const usuarioContra = await connection.query(`SELECT idusuario FROM usuario WHERE email=? AND 
        //     contra=${bcrypt.compare(contraseña,user)}`,email)
            
        // }else{
        //     response.status(404);
        //     response.send({error: "Email no registrado"})
        // }
        
          

    }catch(error){
        response.status(500);
        
}
    


    }

function validarToken(request,response,next){
        const accesToken = request.header["autorizado"];
        
}

const unHash = async (texto,hasheado)=>{
            return await bcrypt.compare(texto,hasheado);
}

export const methods={
    loginUsuario,
    token
}