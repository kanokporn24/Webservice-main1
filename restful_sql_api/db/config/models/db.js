const mysql = require('mysql');
const dbConfig = require("../config/db.config");

//Create a connection to the database sserver
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user:dbconfig.USER,
    password:dbconfig.PASSWORD,
    database:dbconfig.DB
});

//open MYSQL Connection
connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Successfully connected to the database...");
        
    }
);

module.exports = connection;