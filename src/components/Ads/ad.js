import { useEffect } from "react/cjs/react.development"

function Ad({...ad}){
    console.log(ad.name)
    return (
        <div id={ad.id}>
            <h1>{ad.name}</h1>
            <p>Este artículo {ad.sale ? 'se vende' : 'se busca'}</p>
            <p>Vale {ad.price} €</p>
            <p>Artículo etiquetado en {ad.tags}</p>
        </div>
    )
}


function AdList({adsv}){
    console.log(adsv)
    useEffect(() => {}, [adsv])
    return (
        <p>"hola"</p>
    )
}


export default Ad;