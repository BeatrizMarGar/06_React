import { Redirect, Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "../context";

//preparo las rutas privadas

const Private_Route = props => {
    const { isLogged } = useAuthContext()
    const loc = useLocation()

    return isLogged ? (
        <Route {...props} />)
        :
        ( <Redirect to={{ pathname: '/login', state: {from: loc} }} />)
}

export default Private_Route;