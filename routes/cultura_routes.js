// armanezar as rotas dentro da API

import express from "express";
import {cultura} from "../controller/cultura_controller.js";

// setar a rota (router = objeto da engine node)
let router = express.Router();

// criação dos endpoints
router.get('/cultura', cultura.all); // método select
router.post('cultura', cultura.create); // método create
router.put('/cultura/:nome_cultura', cultura.update); // método update
router.delete('cultura/:nome_cultura', cultura.delete); // método delete

// exportar o router (objeto com as rotas)
export {router}