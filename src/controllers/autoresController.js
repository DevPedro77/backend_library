import { autor } from "../models/Autor.js";

class AutorController {
  // Listar todos os autores - GET
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).send({ message: "Erro ao listar autores", error });
    }
  }

  // Buscar autor por ID - GET
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).json({ message: "Autor não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar autor por ID", error: error.message });
    }
  }

  // Cadastrar um novo autor - POST
  static async cadastrarAutor(req, res) {
    try {
      const cadastrarAutor = await autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado com sucesso", autor: cadastrarAutor });
    } catch (error) {
      console.error("Erro ao cadastrar autor:", error);

      if (error.name === "ValidationError") {
        res.status(400).json({
          message: "Dados inválidos para cadastro de autor.",
          erro: error.message,
          campos: error.errors
        });
      } else {
        res.status(500).json({
          message: "Erro interno ao cadastrar autor.",
          erro: error.message
        });
      }
    }
  }

  // Atualizar um autor por ID - PUT
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorAtualizado = await autor.findByIdAndUpdate(id, req.body, { new: true });

      if (autorAtualizado) {
        res.status(200).json({ message: "Autor atualizado com sucesso", autor: autorAtualizado });
      } else {
        res.status(404).json({ message: "Autor não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar autor", erro: error.message });
    }
  }

  // Deletar um autor por ID - DELETE
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorDeletado = await autor.findByIdAndDelete(id);

      if (autorDeletado) {
        res.status(200).json({ message: "Autor deletado com sucesso" });
      } else {
        res.status(404).json({ message: "Autor não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar autor", erro: error.message });
    }
  }
}

export default AutorController;
