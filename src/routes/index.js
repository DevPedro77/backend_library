import express from 'express';
import livros from './livrosRoutes.js';

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send
("Rota principal do App"))

app.use(express.json(), livros) // referencia as rotas livros
};

export default routes;