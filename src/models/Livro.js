import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema // referenciando o schema autor.
}, { versionKey: false });



const livro = mongoose.model("livros", livroSchema);

export default livro;