import express from 'express';
import livros from './livrosRoutes.js';
import autores from "../routes/autoresRoutes.js"
const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send
("Rota principal do App"))

app.use(express.json());
app.use(livros);
app.use(autores);

};

export default routes;