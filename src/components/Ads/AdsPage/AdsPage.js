import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";

function ShowAllAds({isLogged, history, ...prop}){
    const [ads, setAds] = useState([])
    useEffect(()=> {
        AllAds().then(setAds)
    }, [])

    
    return (
        <Layout isLogged={isLogged}>
            <div>
                <ul>
                    {ads.map(({id, ...ad}) => (
                        <li key={id}>
                        <Link to={`http://localhost:3001/api/v1/adverts/${id}`}>
                            <Ad {...ad}/>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default ShowAllAds