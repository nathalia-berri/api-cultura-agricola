// conexão com o banco de dados

import mysql2 from "mysql2/promise";

async function connect() {
    if (global.connection && global.connection.state !== "disconnected") { 
        return global.connection;
    } try {
        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:@localhost:3306/cultura_agricola");
        console.log("Conectado ao SGBD MySql!");
        // se estiver conectado, joga a variável para o return
        global.connection = connection;
        return connection;
    } catch (e) {
        console.log("Ocorreu um erro...");
    }
}

export default connect; // pega a variável retornada pela função connect