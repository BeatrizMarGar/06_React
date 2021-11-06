import Layout from "../../layout/layout";
import { CreateAd, AllAds } from "../service";
import FormField from "../../common/formField";
import { useState } from 'react';
import { GetTags } from "../service";

const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  



function NewAd(){
    const [value, setValue] = useState ({name: '', sale: '', price: '', tags: '', photo: ''})
    const {select, changeselect} = useState()
    
    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
         
      const handleSubmit = async (event) => {
        event.preventDefault();
        // call to api - send value
        //resetError();
        
        try {
            await CreateAd(value);
            console.log(AllAds)
         // const { from } = location.state || { from: { pathname: '/' } };
         // history.replace(from);
          
        } catch (error) {
            console.log(value)
            console.log(error)
         // setError(error);
        }
      };

        function Selector (eso) {
        //changeselect()
        //alert(e.option.value)
        alert(eso)
      }


    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <FormField
                    type="text"
                    name="name"
                    label="nombre del producto"
                    value={value.name}
                    onChange={handleChange}
                    autofocus
                >
                </FormField>
                <FormField
                    type="number"
                    name="price"
                    label="Precio"
                    value={value.price}
                    onChange={handleChange}
                >
                </FormField>
                <input
                    type="radio"
                    name="sale"
                    value={value.sale}
                ></input>
                <input
                    type="radio"
                    name="sale"
                    value={value.sale}
                    >
                </input>
                <select 
                name="tags"
                type="array"
                value={value.tags}
                >
                    {options.map((option) => (
                    <option value={value.tags}>{option.label}</option>
                    ))}
                </select>
                <input
                    type="file"
                    name="photo"
                    label="photo"
                    value={value.photo}
                    onChange={handleChange}
                >
                </input>
                <button
                    type="submit"
                >
                    Crear anuncio
                </button>
            </form>
        </Layout>
    )
}

export default NewAd;