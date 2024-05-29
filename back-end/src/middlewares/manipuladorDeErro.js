import ErroBase from "../errors/ErroBase.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

function manipuladorDeErro(erro, req, res, next) {
  if (erro instanceof ErroBase){
    new ErroBase().enviarResposta(res)
  } else if (erro instanceof NaoEncontrado){
    erro.enviarResposta(res)
  }
}

export default manipuladorDeErro;