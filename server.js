// ponto de entrada onde o cliente faz a requisição

// importação do pacote express
import express from "express";
// importação das rotas
import {router} from "./routes/cultura_routes.js";

// iniciar o projeto
let server = express();

// funções de microframework do Express (informações json)
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/", router)

// porta que vai rodar a aplicação
server.listen(3000);
    console.log("Porta 3000");
