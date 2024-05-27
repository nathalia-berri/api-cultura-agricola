// operações CRUD

import connect from "../config/connection.js";

// objeto para troca de dados
let cultura = {};
const con = await connect(); // conexão assíncrona

//método select
cultura.all = async function (req, res) // res = resign (entregar) | método do express
{
    try {
        let culturas = await con.query("SELECT * FROM cultura");
        res.send(culturas); // endpoint, envia o que foi selecionado
    }
    catch (e) {
        console.log(" erro consulta...", e)
    }
}

cultura.create = async function(req, res) {
    try {
        let cultura = req.body // vem do cliente
        let sql = "INSER INTO cultura (codigo_cultura, nome_cultura, ano_safra) VALUES (?,?,?)"
        let values = [cultura.codigo_cultura, cultura.nome_cultura, cultura.ano_safra];
        let result = await con.query(sql, values) // mandar executar a inserção
        res.send({
            status: "Insercao efetuada com sucesso!",
            result: result
        })
    } catch (e) {
        console.log("Erro.........", e);
    }

}




export {cultura} // exportar o objeto para o servidor