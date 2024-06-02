import NaoEncontrado from "../errors/NaoEncontrado.js";
import doce from "../models/Doce.js";

class docesController {
  static async obterDoces(req, res, next){
    try {
      const doces = await doce.find({});
      res.status(200).json({ doces: doces })
    } catch (error) {
     next(error)
    }
  }

  static async obterDocePorId(req, res, next){
    try {
      const id = req.params.idDoce;
      const doceFiltrado = await doce.findById(id);
      if (doceFiltrado !== null){
        res.status(200).json({ doce: doceFiltrado })
      } else {
        next(new NaoEncontrado("Doce não encontrado!"));
      }
    } catch (error) {
      next(error)
    }
  }

  static async criarDoce(req, res, next){
    try {
      const infosDoce = req.body;
      const doceCriado = await doce.create(infosDoce);
      console.log(doceCriado);
      res.status(201).json({ message: "Doce criado com sucesso!", Doce: doceCriado })
    } catch (error) {
      next(error)
    }
  }

  static async deleterDocePorId(req, res, next){
    try {
      const idDoceASerDeletado = req.params.idDoceASerDeletado;
      const doceFiltrado = await doce.findByIdAndDelete(idDoceASerDeletado);
      if (doceFiltrado !== null) {
        res.status(200).json({ message: `Doce com ID ${idDoceASerDeletado} deletado com sucesso!` })
      } else {
        new NaoEncontrado("ID do Doce não encontrado")
      }
    } catch (error) {
      next(error)
    }
  }
}

export default docesController;