import {getConnection} from "./../database/database";

const getTorneos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM torneo");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const geTorneo=async(request,response)=>{
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

const addUsuario=async(request,response)=>{

    try{
        const {nombre,fecha_inicio,fecha_final,descripcion}=request.body;
        
        const connection=await getConnection();
        const result = 
            await connection.query(`INSERT INTO torneo (juego_idjuego,usuario_idusuario,nombre,fecha_inicio,fecha_final,descripcion) 
            VALUE(3,4,"${nombre}","${fecha_inicio}","${fecha_final}","${apellido2}","${descripcion}");`);
        
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
        const result = await connection.query("DELETE FROM torneo WHERE idtorneo=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateUsuario=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion}=request.body;
        const connection=await getConnection();
        const juego = {nombre,descripcion};

        const result = 
            await connection.query(`UPDATE usuario SET nombre1="${nombre1}",nombre2="${nombre2}",apellido1="${apellido1}",apellido2="${apellido2}",email="${email}",cumple="${cumple}",celular="${celular}",contra="${contra}" WHERE idusuario="${id}";`);
    
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