import { useAuthContext } from "../auth/context";
import { logout } from "../auth/service";
import { Link } from "react-router-dom";

function Header () {

    const {handleLogout} = useAuthContext()

    const handleOut = async (event) =>{
        try {
            await logout().then(handleLogout);
        } catch (error){
            console.log(error)
        }
    }
    return (
        <nav>
            <Link to="/login">
            <button 
                    onClick={(event) => {
                        const confirmBox = window.confirm(
                        "¿Seguro que quieres cerrar sesión?"
                        )
                        if (confirmBox === true) {
                        {handleOut(event)}
                        }
                    }}>Cerrar Sesión
            </button>                
            </Link>
            <Link to='/adverts/new'>
                <button > Publicar anuncio</button> 
            </Link>
            <Link to='/adverts'>
                <button > Ver todos los anuncios </button> 
            </Link>
        </nav>
    )
}

export default Header