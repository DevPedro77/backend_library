import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  nome: { type: String},
  nacionalidade: { type: String }
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema)

export {autor, autorSchema};