import express from "express";
import conectarDb from "./config/dbConnect.js";
import livro from "..//src/models/Livro.js";

const conexao = await conectarDb();

conexao.on("error", (erro)=>{
  console.error("error ao conectar", erro);
})

conexao.once("open", ()=>{
  console.log("Conexao feita com sucesso")
})

const app = express();
// meu app vai usar json como req padrao
app.use(express.json())


app.get("/", (req, res)=>{
  res.status(200).send("Rota principal do app");
});

// Listando nosso objeto de livros
app.get("/livros", async (req, res) => {
  try {
    const listaLivro = await livro.find({});
    console.log(listaLivro);
    res.status(200).json(listaLivro);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    res.status(500).json({ message: "Erro ao buscar livros" });
  }
});

// Listando um livro por id
app.get("/livros/:id", (req, res) =>{
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index])
})

// Cadastrando um livro no array
app.post("/livros", (req, res)=>{
  livros.push(req.body);
  res.status(201).json(livros);
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

