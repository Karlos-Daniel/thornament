import app from "./src/routes/app";

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
    
};

main();