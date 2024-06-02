import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";

function manipuladorDeErro(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res)
  } else if (erro instanceof ErroBase){
    erro.enviarResposta(res)
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErro;