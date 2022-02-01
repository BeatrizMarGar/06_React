import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds, FilteredAds, SelectTags } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";
import storage from "../../../utils/storage";
import { filter_Adverts } from "./filters";
/*
const getFilt = () => storage.get('filters')
const saveFilters = filterAdverts => storage.set('filters', filterAdverts);
*/
function ShowAllAds({isLogged, history, ...prop}){
    const arr = []
    const [ads, setAds] = useState([])
    const [filterAdverts, setfilters] = useState([])
   useEffect(() => {
         AllAds()
            .then(setAds)
   }, [])
   useEffect(() => {
    AllAds()
       .then(setfilters)
   }, [])

    function filtros(value){
        console.log(value)
        if(value == "tags"){
            console.log("tags")
            setfilters(ads)
        } else if (!value){
            console.log("no hay valor")
        }else{
       ads.map(({id, ...ad}) => {
           if(ad.tags == value){
            arr.push(ad)
           } else if (value == 'tags'){
               setfilters(ads)
           }
        })
        setfilters(arr)
        return arr
    } 
   }

    return (
        <Layout isLogged={isLogged} filters={filtros}>
            <div>
                <ul>
                    {
                        //AQUI ES DONDE HAY QUE CAMBIAR, ADS TIENE QUE SER EL RESULTADO FILTRADO
                        //filterAdverts.length ? (
                        ads.length ? (
                            //<AdList filterResult={ads} />
                            
                            filterAdverts.map(({id, ...ad}) => (
                                <li key={ad.id}>
                                <Link id={id} to={`/adverts/${id}`} ad={ad}>
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