import Layout from "../../layout/layout";
import { CreateAd, AllAds } from "../service";
import FormField from "../../common/formField";
import { useState, useEffect } from 'react';
import { GetTags } from "../service";
import Header from "../../layout/header";
import ErrorMSG from "../../error/error";

  
function NewAd({onLogin}){
    const [value, setValue] = useState ({name: '', sale: '', price: '', tags: '', photo: ''})
    const {select, changeselect} = useState()
    const [logError, ErroronLogin] = useState('null')
    const [cat, setCats] = useState([])
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])


    let errorLogin = ""
    
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
          console.log(error)
          ErroronLogin(error.status);
        }
      };

    return (
        <Layout>
            <Header/>
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
                    {cat.map((option) => (
                    <option value={value.tags}>{option}</option>
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
                <ErrorMSG mensaje={logError} />
            </form>
        </Layout>
    )
}

export default NewAd;