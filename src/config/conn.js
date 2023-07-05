const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0
}
);

// Para probar la conexión individual de la base de datos:  node ./src/config/conn.js
 
pool.getConnection((error, connection) => {
    if(error){
        console.error('Hubo un error en la conexión: ', error)
    }else{
        console.log("La conexión a la base de datos ha sido exitosa");
        connection.release();
    }
})

module.exports= { conn:pool.promise()}