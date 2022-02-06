import { GetTags } from "../Ads/service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FormField from "../common/formField"

function Categories ({filters, searchAd}) {
    
    const [cat, setCats] = useState([])
    const [filter, selectedFilter] = useState()
    const [value, setValue] = useState({search: ''})
    const [tags, filtertags] = useState([])

    let arr = []
    let obj = {}
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])

    /*
    const selectedfilter = event => {

        if (event.target.checked){
            arr.push(event.target.value)
        } else {
            console.log("fuera")
            let pos = arr.indexOf(event.target.value)
            arr.splice(pos, 1)
        }
        obj = Object.assign({}, arr)
        console.log(obj)
        
     // 
    }
*/

const selectedfilter = event => {
    if(event.target.value == "tags"){
        filters(event.target.value, true)
    }else {
        filters(event.target.value, event.target.checked)
    }
}   

    const handleSearch = (event) => {
        event.preventDefault();
        searchAd(value.search)
    }
    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

    return (
         <div>
            <form onSubmit={handleSearch}>
                <FormField type="text" name="search" id="search" value={value.search} onChange={handleChange}></FormField>
                <input type="submit" value="Submit"></input>
            </form>
            {
                cat.map((option) => (
                    <div key={"div-" + option}>
                        <input type="checkbox"
                            id={option}
                            key={option + "choose_tag"}
                            value={option}
                            onChange={event => selectedfilter(event)}>
                        </input>
                        <label>{option}</label>
                        
                </div>
                ))
            }
            <button 
                value="tags"
                onClick={event => selectedfilter(event)}>Todos los filtros</button>
     </div>
    )
}

export default Categories

/*
import { GetTags } from "../Ads/service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
                    <button 
                    id={option}
                    value={option}
                    onClick={event => selectedfilter(event.target.value)}>
                        {option}</button>
                ))
            }
            <button 
                value="tags"
                onClick={event => selectedfilter(event.target.value)}>Todos los filtros</button>
     </div>
    )
}

export default Categories

*/