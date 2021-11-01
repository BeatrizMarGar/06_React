import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { AllAds } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";

function ShowAllAds({history, ...prop}){
    const [ads, setAds] = useState([])
    useEffect(()=> {
        AllAds().then(ads => setAds(ads))
        console.log(ads)
    })
    return (
        <Layout>
            <ul>
                {ads.map(({id, ...ad}) => (
                    <li key={id}>
                        <Ad {...ad} />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default ShowAllAds