import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AllAds } from "./service";

function Ad({...ad}){
    return (
        <div id={ad.id}>
            <p>anuncio</p>
            <p>{ad.name}</p>
            <p>{ad.sale ? 'se vende' : 'se busca'}</p>
            <p>{ad.price}</p>
            <p>{ad.tags}</p>
        </div>
    )
}

function AdList ({elemtofilter, filters, fil}){

    const [ads, getAds] = useState([])
    console.log(elemtofilter, ads, filters)
    useEffect( () => {
        AllAds().then(getAds)
    }, [])
    const renderAds =
    ({id, ...ad}) => (
        <li key={id}>
            <Link to={`/adverts/${id}`}>
                <Ad {...ad}></Ad>
            </Link>
        </li>
    )
    return (
        <p>Elegido{fil}</p>
        //{renderAds}
        )
}

export default Ad;