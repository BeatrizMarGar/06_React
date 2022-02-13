import { useState, useEffect } from "react/cjs/react.development"
import { GetDetails, deleteAdvert } from "./service"
import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"
import Layout from "../layout/layout"
import { useParams } from "react-router"
import { Confirmation } from "../common/confirmation"

function Detail () {
    let loc = useLocation().pathname
    let ref = loc.replace('/adverts/','');

    const history = useHistory();

    const handleDelete = () => {
        deleteAdvert(detail.id)
        history.push('/')
        
    }
    
  const advertId = useParams(history).advertId;

    const [detail, getdetails] = useState({price: "", name: "", tags: [], id: "", photo: "" })
    useEffect(()=> {
        //GetDetails(ref).then(getdetails)
        async function checkad() {
            try{
                const getad = await GetDetails(ref)
                getdetails(getad)
            } catch(error){
                if (error.status === 404){
                    history.replace('/404')
                  }else if(error.status === 401){
                    history.replace('/login')
                  }
            }
        }
        checkad()
    }, [])
    //let string = JSON.stringify(detail)
    const imgRoute = process.env.REACT_APP_API_BASE_URL + detail.photo
    let adtags = `${detail.tags}`
    return (
        <Layout>
        <div key={detail.id}>
                <p>{detail.name}</p>
                <p>{detail.price}</p>
                <p>{adtags}</p>
                
                {detail.photo ? <img src={imgRoute}></img> : <p>No hay imagen disponible de este artículo</p>}
                <button 
                    onClick={() => {
                        const confirmBox = window.confirm(
                        "¿Seguro que quieres borrar el anuncio?"
                        )
                        if (confirmBox === true) {
                        handleDelete()
                        }
                    }}>¿Eliminar el anuncio?
                </button>
        </div>
        </Layout>
    )
}
export default Detail;