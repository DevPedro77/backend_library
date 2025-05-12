import express from"express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// Listando TODOS livros
routes.get("/livros", LivroController.listarLivros);
// Cadastrando um livro
routes.post("/livros",LivroController.cadastraLivro);


export default routes;