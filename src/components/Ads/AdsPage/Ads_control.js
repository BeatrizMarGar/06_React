
import { useState, useEffect } from "react";
import { getFilteredAds } from "../service";
import { GetTags } from "../service";

function AdvertFilter(props) {
  
  const [cat, setCats] = useState([])
  useEffect(()=> {
      GetTags().then(setCats)
  }, [])
  const [filter, setFilter] = useState({
    name: "",
    priceMin: "",
    priceMax: "",
    sale: "",
    tags: [],
    photo: "",
  });
  

  const handleInput = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    setFilter({ ...filter, [filterName]: filterValue });
  };

  const handleMultiSelect = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    let multiselect = [...filter[filterName]];
    if (multiselect.indexOf(filterValue) < 0) {
      multiselect.push(filterValue);
    } else {
      multiselect = multiselect.filter((e) => e !== filterValue);
    }
    setFilter({ ...filter, [filterName]: multiselect });
  };

  const handleFilter = async (event) => {
    event.preventDefault();
    try {
      let resolvedads = await getFilteredAds(filter);
      console.log(resolvedads)
      props.filterAds(resolvedads);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form noValidate onSubmit={handleFilter}>
      <input
        type="text"
        placeholder="Nombre del artículo"
        name="name"
        onChange={handleInput}
        value={filter.name}
        required
      />
      <input
        type="number"
        placeholder="Precio mínimo"
        onChange={handleInput}
        name="priceMin"
        min="0"
        value={filter.priceMin}
        required
      ></input>
      <input
        name="priceMax"
        type="number"
        placeholder="Precio Máximo"
        onChange={handleInput}
        min="0"
        value={filter.priceMax}
        required
      />
      <select name="sale" onChange={handleInput}>
        <option value="">Compra/Venta</option>
        <option value="true">Venta</option>
        <option value="false">Compra</option>
      </select>


      <select
        name="tags"
        onChange={handleMultiSelect}
        multiple={true}
        value={filter.tags}
        required
      >
          {cat.map(tag => (
            <option
              key={tag}
              name="tags"
              value={tag}
            >{tag}
            </option>
          ))}
      
      </select>

      <button type="submit">Filtrar</button>
    </form>
  );
}

export default AdvertFilter;