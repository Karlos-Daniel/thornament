import config from "../routes/config"
const bcrypt=require("bcryptjs");
import {getConnection} from "./../database/database";
const jwt = require("jsonwebtoken");


const loginUsuario=async(request,response)=>{
    try{
        const {email,contraseña} = request.body;
        const connection = await getConnection();
        
        connection.query('SELECT * FROM usuarios WHERE email=?',[email],async(error,results)=>{
            if(results.length == 0 || !(await bcrypt,bcrypt.compare(contraseña,result[0].contraseña))){
                response.status(400);
            }else{
                const idusuario = results[0].idusuario
                const token = jwt.sign({idusuario:idusuario}, config.JWT_SECRETO,{
                    expiresIn: config.JWT_TIEMPO_EXPIRA
                })
            }
        })
    }catch(error){
        response.status(500);
        
}}

export const methods={
    loginUsuario
}