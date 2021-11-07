import Layout from "../../layout/layout";
import { CreateAd, AllAds } from "../service";
import FormField from "../../common/formField";
import { useState, useEffect } from 'react';
import { GetTags } from "../service";
import Header from "../../layout/header";
import ErrorMSG from "../../error/error";

  
function NewAd({onLogin}){
    const [value, setValue] = useState ({name: '', sale: '', price: '', tags: [], photo:''})
    const {select, changeselect} = useState()
    const [logError, ErroronLogin] = useState('null')
    const [cat, setCats] = useState([])
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])


    const selectedfilter = event => {
      setValue(prevState => ({
        ...prevState,
        tags: event,
      }));
    };
    let errorLogin = ""
    
    const handlePhoto = (event) =>{
      setValue(prevState => ({
        ...prevState,
        [event.target.name]: event.target.file
        
      }))
    }

    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
         
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await CreateAd(value);
            console.log(value)
         // const { from } = location.state || { from: { pathname: '/' } };
         // history.replace(from);
          
        } catch (error) {
          console.log(value)
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
          <select
            className="sale"
            name="sale"
            value={value.sale}
            onChange={handleChange}
            required
          >
            <option name="sale" value={true}>
              Lo vendo
            </option>
            <option name="sale" value={false}>
              lo compro
            </option>
          </select>

                <select 
                name="tags"
                type="array"
                value={value.tags}
                onChange={event => selectedfilter(event.target.value)}
                >
                    {cat.map((tag) => (
                    <option value={tag}>{tag}</option>
                    ))}
                </select>
                <input
                  className="photo-input"
                  name="photo"
                  type="file"
                  placeholder="elige la foto"
                  onChange={handlePhoto}
                />
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