import { GetTags } from "../Ads/service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FormField from "../common/formField"

function Categories ({filters, searchAd}) {
    
    const [cat, setCats] = useState([])
    const [filter, selectedFilter] = useState()
    const [value, setValue] = useState({search: ''})
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])

    const selectedfilter = event => filters(event)

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
                    <button 
                    id={option}
                    key={option}
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