
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getFilteredAds } from "../service";

function AdvertFilter({props, selectedAds}) {
  
  
  const [prices, setPrices] = useState({min: 'd', max: ''})
  const [filter, setFilter] = useState({
    name: "",
    priceMin: "",
    priceMax: "",
    sale: "",
    tags: [],
    photo: "",
  });
  
  let allprices = []
  let min = Math.min(...allprices)
  let max = Math.max(...allprices)
  console.log(min, max)


  
useEffect(() => {
  
  selectedAds.forEach(element => {
    allprices.push(element.price)
    return allprices
  })
}, [selectedAds])

  const seenumbers = () => {
    console.log(prices)
  }

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
    let adverts = props.selectedAds;
    try {
      console.log(filter)
      debugger
      let resolvedads = await getFilteredAds(filter);
      props.filterAds(resolvedads);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form noValidate onSubmit={handleFilter}>
      <p onClick={seenumbers}>vernumeroos</p>
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
        min = {min}
        value={filter.priceMin}
        required
      ></input>
      <input
        max={max}
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
      >
      
        <option value="lifestyle">Lifestyle</option>
        <option value="mobile">Mobile</option>
        <option value="motor">Motor</option>
        <option value="work">Work</option>
      </select>

      <button type="submit">🔎 Filtrar</button>
    </form>
  );
}

export default AdvertFilter;