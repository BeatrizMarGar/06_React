import { useState, useEffect } from "react/cjs/react.development"
import { GetDetails, deleteAdvert } from "./service"
import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"

function Detail () {
    let loc = useLocation().pathname
    let ref = loc.replace('/adverts/','');

    const history = useHistory();
    const [detail, getdetails] = useState({price: "", name: "", tags: "", id: "" })

    const handleDelete = () => {
        //deleteAdvert(detail.id)
        history.push('/')
    }

    useEffect(()=> {
        GetDetails(ref).then(getdetails)
    }, [])
    
    let string = JSON.stringify(detail)
    console.log(detail)
    return (
        <div>
            <div>
                <p>{detail.name}</p>
                <p>{detail.price}</p>
                <p>{detail.tags}</p>
            </div>
            <button onClick={handleDelete}> eliminar anuncio</button>   
        </div>
    )
}

export default Detail