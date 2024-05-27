// operações CRUD

import connect from "../config/connection.js";

let cultura = {}; // objeto para troca de dados
const con = await connect(); // conexão assíncrona

/* -----------------------------------------------------------------------------------------------*/
// método select (GET)
cultura.all = async function (req, res) { // req = require, res = resign (entregar) | método do express
    try {
        let todas_culturas = await con.query("SELECT * FROM cultura;");
        res.send(todas_culturas); // endpoint, envia o que foi selecionado
    }
    catch (e) {
        console.log("Erro.........", e)
    }
}
/* -----------------------------------------------------------------------------------------------*/
// método create (POST)
cultura.create = async function (req, res) {
    try {
        let cultura = req.body // vem do cliente
        let sql = "INSER INTO cultura (codigo_cultura, nome_cultura, ano_safra) VALUES (?,?,?);";
        let values = [cultura.codigo_cultura, cultura.nome_cultura, cultura.ano_safra];
        let result = await con.query(sql, values); // mandar executar a inserção
        res.send ({
            status: "Insercao efetuada com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro.........", e);
    }
}
/* -----------------------------------------------------------------------------------------------*/
// método update (PUT)
cultura.update = async function (req, res) {
    try {
        let codigo = req.params.codigo_cultura;
        let cultura = req.body;
        let sql = "UPDATE cultura SET nome_cultura = ?, ano_safra = ?, WHERE codigo_cultura = ?;";
        let values = [cultura.nome_cultura, cultura.ano_safra, codigo];
        let result = await con.query(sql, values);
        res.send ({
            status: "Atualizacao da Cultura de codigo" + codigo + " realizada com sucesso.",
            result: result
        });
    } catch (e) {
            console.log("Erro.........", e);
    }
}
/* -----------------------------------------------------------------------------------------------*/
// método delete (DELETE)
cultura.delete = async function (req, res) {
    try {
        let codigo = req.params.codigo_cultura;
        let sql = "DELETE FROM cultura WHERE cod_cultura = ?;";
        let result = await con.query(sql, [codigo]);
        res.send ({
            status: "Exclusão da Cultura numero " + codigo + " realizada com sucesso.",
            result: result
        });
    } catch (e) {
        console.log("Erro.........", e);
    }
}
/* -----------------------------------------------------------------------------------------------*/

export {cultura}; // exportar o objeto para o servidor