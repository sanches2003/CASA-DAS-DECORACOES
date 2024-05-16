import 'bootswatch/dist/journal/bootstrap.css'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {mensagemSucesso, mensagemErro} from '../../Configuration/Mensagem'
import usuarioService from '../../Service/usuarioService'

function Login(){

    const nav = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const service = new usuarioService()


    const logar = ()=>{

      if(!email || !senha )
      {
        mensagemErro("Preencha todos os campos!")
        return
      }

      service.validarUsuario(email, senha).then(
      (response) => {
        const usu = JSON.stringify(response.data)
        localStorage.setItem("usuario", usu)
        mensagemSucesso("Autenticação efetuada com sucesso!")
        return nav("/home")
      }
      ).catch(
        error=>{
          mensagemErro(error.response.data)
          console.log(error.response.data)
        }
      );
          
    }

    const cadastrar = ()=>{
      return nav("cadastro_usuarios")
      
    }

    return(
        <div className='container'>
            <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Endereço de email</label>
    <input value={email} 
    onChange={e=>{setEmail(e.target.value)}}
    type="email" className="form-control" id="staticEmail" aria-describedby="emailHelp" placeholder="Seu email"/>
    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Senha</label>
    <input  value={senha} 
    onChange={e=>{setSenha(e.target.value)}}
    type="password" className="form-control"
     id="exampleInputPassword1" placeholder="Senha"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Clique em mim</label>
  </div>
  <button type="button" onClick={logar} className="btn btn-primary">Login</button>
  <button type="button" onClick={cadastrar} className="btn btn-primary">Cadastrar</button>
</form>
        </div>
    )
}
export default Login