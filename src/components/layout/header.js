import { useState } from "react/cjs/react.development"
import AuthContext from "../auth/context"
import { login, logout } from "../auth/service";
import { Link, useHistory } from "react-router-dom";
function Header () {
//  const [ logged, handleLogout] = useState(AuthContext)

const history = useHistory();
const handleLogout = async (event) =>{
    try {
        await logout('Token');
        window.location.reload(false);
    } catch (error){
        console.log(error)
    }
}
    return (
        <nav>
            <input placeholder="Busca en todas las categorias"></input>
            <button onClick={handleLogout}> Cerrar Sesión</button>
            <Link to='/adverts/new'>
                <button > Publicar anuncio</button>
            </Link>
        </nav>
    )
}

export default Header