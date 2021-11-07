import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds, GetTags } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";

function ShowAllAds({isLogged, history, ...prop}){
    const [ads, setAds] = useState([])
    const [filter, setFilter] = useState('all')
    useEffect(()=> {
        AllAds().then(setAds)
    }, [])

    const filtros = (value) => {
        setFilter(value)

    }

    return (
        <Layout isLogged={isLogged} filters={filtros}>
            <div>
                <ul>
                    {
                    
                    ads.map(({id, ...ad}) => (
                        <li key={id}>
                        <Link to={`/adverts/${id}`}>
                            <Ad {...ad}/>
                        </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default ShowAllAds