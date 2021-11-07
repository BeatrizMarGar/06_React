import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds, SelectTags } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";

function ShowAllAds({isLogged, history, ...prop}){
    const [ads, setAds] = useState([])
    const [fil, setFilter] = useState()
    let fin = [""]
    useEffect(()=> {
        AllAds().then(setAds)
    }, [])
    let arr = []

    const filtros = (value) => {
        ads.map(({tags, ...ad}) => {
            if (tags == value){
                arr.push(ad)
                setAds(arr)
            } else if (value == "tags"){
                AllAds().then(setAds)
            } else {
            }
            console.log(ads)    
        })
        
    }

    return (
        <Layout isLogged={isLogged} filters={filtros}>
            <div>
                <ul>
                    {
                        ads.length ? (
                    ads.map(({id, ...ad}) => (
                        <li key={id}>
                        <Link to={`/adverts/${id}`} id={id}>
                            <Ad {...ad}/>
                        </Link>
                        </li>
                    ))
                    ) : (
                        <p>NO HAY ANUNCIOS PUBLICADOS</p>
                    )
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default ShowAllAds