import { logout } from "../auth/service"

function Header ({logout}) {
    const CloseSesion = event =>{
        alert("AHORA")
        //logout()
    }
    return (
        <nav>
            <input placeholder="Busca en todas las categorias"></input>
            <button
                onClick={CloseSesion}> Cerrar Sesión</button>
            <button> Publicar anuncio</button>
        </nav>
    )
}

export default Header