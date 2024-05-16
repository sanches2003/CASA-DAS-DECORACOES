import { useEffect, useState, useTransition } from "react";
import usuarioService from "../../Service/usuarioService";
import { mensagemErro } from "../../Configuration/Mensagem";
import { mensagemSucesso } from "../../Configuration/Mensagem";


function validar(usuario){
    let ret = true;
    if (!usuario.login)
    {
      ret = false;
      mensagemErro("Preencha o tipo de decoração.")
    }
    return ret;
  }
function Usuario(){

    
    

    return(<div>Cadastro</div>)
}
export default Usuario;