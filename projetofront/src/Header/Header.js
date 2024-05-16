import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "../Pages/Login"
import { useNavigate } from "react-router-dom"

function Header(){

  const [login, setNome] = useState ('')
  const nav = useNavigate ()

  const logout = () =>{  
    localStorage.removeItem('usuario')
    localStorage.clear()
    return nav("/")
  }

  
  useEffect (() =>{
    const usuario = localStorage.getItem('usuario')
    if(usuario) {
      setNome(JSON.parse(usuario).login)
    }

  },[])
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/home">Home<span className="visually-hiden">(current)</span></Link>
    </li>
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/cadastroagenda">Agenda</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/cadastrocliente">Cliente</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/cadastrodecoracao">Decoração</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/cadastrotipodecoracao">Tipo de Decoração</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-item nav-link active" to="/cadastrousuario">Usuários</Link>
    </li>    
      Bem vindo {login}!
      <button type="button" className="btn btn-danger" href="#" onClick={logout}>Sair</button>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header