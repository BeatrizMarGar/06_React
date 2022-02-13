import { useAuthContext } from "../auth/context";
import { logout } from "../auth/service";
import { Link } from "react-router-dom";
import { useState } from "react";
import Conf from "../common/confirmation";

function Header () {

    const {handleLogout} = useAuthContext()
    const [getlog, setlogbutton] = useState(false)
    const handlehide = () => setlogbutton(false)
    const handleshow = () => {setlogbutton(true)}

    const handleOut = async (event) =>{
        try {
            await logout().then(handleLogout);
        } catch (error){
            console.log(error)
        }
    }
    return (
        <nav>
                <button onClick={ handleshow }
                    /*
                    onClick={(event) => {
                        const confirmBox = window.confirm(
                        "¿Seguro que quieres cerrar sesión?"
                        )
                        if (confirmBox === true) {
                        {handleOut(event)}
                        }
                    }}*/
                    
                >Cerrar sesión
            </button>        
                 
            
            {getlog ? 
                <div>
                    <p>¿Seguro que quieres salir?</p>
                    <button onClick={handleOut}>SI</button>
                    <button onClick={handlehide}>NO</button>
                </div>
                :
                    null
            }   
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