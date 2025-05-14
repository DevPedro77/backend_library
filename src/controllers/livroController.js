// toda logica sobre uma acao envolvedno um livro
import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js";

class LivroController {


  // listagem de livro
  static async listarLivros(req, res){
    try {
      const listaLivro = await livro.find({});
      res.status(200).json(listaLivro);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      res.status(500).json({ message: "Erro ao buscar livros" });
    }
  }
  // Filtrar SOMENTE editora
  static async buscarEditora(req, res){
    const editora = req.query.editora
    try{  
      const livrosPorEditora = await livro.find({editora: editora})
      res.status(200).json(livrosPorEditora);
    } catch (error){
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
   // Listar um livro por id
  static async buscarLivro(req, res){
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id)

      res.status(200).json(livroEncontrado);
    }catch(error){
      console.error("Erro ao buscar o livro", error);
      res.status(500).json({ message: "Erro ao buscar livro" });
    }

  }
  // Cadastrar Livro
  static async cadastraLivro(req, res){
    const novoLivro = req.body // aqui ta as infos do livro

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc} }
      const livroCriado = await livro.create(livroCompleto);

      res.status(200).json({ message: "criado com sucesso", livro: livroCriado})
    }catch(error){
      res.status(500).json({ message: `${error.message} - falha ao cadastrar o livro.` })
    }
  }
// Atualizar livro
static async atualizaLivro(req, res) {
  try {
    const id = req.params.id;
    await livro.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Livro atualizado" });
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar livro: ${error}` });
  }
}

// Deletar livro
static async deletarLivro(req, res) {
  try {
    const id = req.params.id;
    await livro.findByIdAndDelete(id);
    res.status(200).json({ message: "Livro deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: `Erro ao deletar livro: ${error}` });
  }
}

};


export default LivroController;
