import { GetTags } from "../Ads/service"
import { useState, useEffect } from "react"

function Categories ({filters}) {
    
    const [cat, setCats] = useState([])
    const [filter, selectedFilter] = useState()
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])

    const selectedfilter = event => filters(event)  

    console.log(cat)
    return (
         <div>
            {
                cat.map((option) => (
                    <button id={option}>{option}</button>
                ))
            }
            <button 
                value="all"
                onClick={event => selectedfilter(event.target.value)}>Todos los filtros</button>
     </div>
    )
}

export default Categories