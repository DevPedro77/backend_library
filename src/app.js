import express from "express";
import conectarDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import "dotenv/config";

const conexao = await conectarDb();

conexao.on("error", (erro)=>{
  console.error("error ao conectar", erro);
})

conexao.once("open", ()=>{
  console.log("Conexao feita com sucesso")
})

const app = express();
routes(app);
// Listando um livro por id
app.get("/livros/:id", (req, res) =>{
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index])
})


// atualizar um livro
app.put("/livros/:id", (req, res)=>{
  const index = buscaLivro(req.params.id);
  livros[index].nome = req.body.nome;
  res.status(200).json(livros)
})

// Deletar um livro da api
app.delete("/livros/:id", (req, res)=>{
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json(livros);
})



app.listen(5000);
export default app;

