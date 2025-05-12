// toda logica sobre uma acao envolvedno um livro
import livro from "../models/Livro.js"

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
  // Cadastrar Livro
  static async cadastraLivro(req, res){
    try {
      const novoLivro = await livro.create(req.body)
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro})
    }catch(error){
      res.status(500).json({ message: `${error.message} - falha ao cadastrar o livro.` })
    }
  }
};


export default LivroController;
