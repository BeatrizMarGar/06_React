import { useEffect } from "react/cjs/react.development"

function Ad({...ad}){
    console.log(ad.name)
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


function AdList({adsv}){
    console.log(adsv)
    useEffect(() => {}, [adsv])
    return (
        <p>"hola"</p>
    )
}


export default Ad;