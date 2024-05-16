import {Route, Routes, Navigate} from "react-router-dom";

import Home from "./Home/index";
import Login from "./Pages/Login";
import Cliente from "./Pages/Cadastros/CadastroCliente";
import Usuario from "./Pages/Cadastros/CadastroUsuario";
import Decoracao from "./Pages/Cadastros/CadastroDecoracao";
import Agenda from "./Pages/Cadastros/CadastroAgenda";
import TipoDecoracao from "./Pages/Cadastros/CadastroTipoDecoracao";

function PrivateRoute( {children} ){
    const authenticated = localStorage.getItem("usuario")
    return authenticated ? children : <Navigate to="/" />
    }

function MainRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastrocliente" element={<PrivateRoute><Cliente/></PrivateRoute>}/>
            <Route path="/cadastrousuario" element={<PrivateRoute><Usuario/></PrivateRoute>}/>
            <Route path="/cadastrodecoracao" element={<PrivateRoute><Decoracao/></PrivateRoute>}/>
            <Route path="/cadastrotipodecoracao" element={<PrivateRoute><TipoDecoracao/></PrivateRoute>}/>
            <Route path="/cadastroagenda" element={<PrivateRoute><Agenda/></PrivateRoute>}/>
        </Routes>
    )
}

export default MainRoutes;