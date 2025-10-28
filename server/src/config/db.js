import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2';

const credenciales = {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password:process.env.PASSWORD,
    database: process.env.DATABASE
};

const db = mysql.createPool(credenciales);
const dbpromise = db.promise()
export {dbpromise};