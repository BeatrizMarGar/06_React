import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";

function ShowAllAds({isLogged, close, history, ...prop}){
    const [ads, setAds] = useState([])
    useEffect(()=> {
        AllAds().then(setAds)
    }, [])
    return (
        <Layout log={close}>
            <div>
                <ul>
                    {ads.map(({id, ...ad}) => (
                        <li key={id}>
                            <Ad {...ad}/>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default ShowAllAds