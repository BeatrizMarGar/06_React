import { useState, useEffect } from "react/cjs/react.development"
import { GetDetails } from "./service"
import { useLocation } from "react-router"

function Detail () {
    let loc = useLocation().pathname
    let ref = loc.replace('/adverts/','');
    const [detail, getdetails] = useState()
    useEffect(()=> {
        GetDetails(ref).then(getdetails)
    }, [])
    let string = JSON.stringify(detail)
    console.log(string[0])
    return (
        ""
    )
}

export default Detail