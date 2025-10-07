import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const credenciales = {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE
};

const db = mysql.createPool(credenciales);
const dbpromise = db.promise()
export {dbpromise};