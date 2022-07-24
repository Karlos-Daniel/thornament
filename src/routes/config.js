import {config} from "dotenv";
config();
export default{
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    JWT_SECRETO: process.env.JWT_SECRETO,
    JWT_TIEMPO_EXPIRA: process.env.JWT_TIEMPO_EXPIRA
}