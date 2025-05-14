import express from"express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// Listando TODOS livros
routes.get("/livros", LivroController.listarLivros);
// Buscar editora
routes.get("/livros/buscar", LivroController.buscarEditora);
// Listando livro por ID
routes.get("/livros/:id", LivroController.buscarLivro)
// Cadastrando um livro
routes.post("/livros",LivroController.cadastraLivro);
// Atualizar livro
routes.put("/livros/:id", LivroController.atualizaLivro);
// Deletando livro
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes;