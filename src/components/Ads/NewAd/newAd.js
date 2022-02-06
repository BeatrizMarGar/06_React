import Layout from "../../layout/layout";
import { CreateAd, AllAds } from "../service";
import FormField from "../../common/formField";
import { useState, useEffect } from 'react';
import { GetTags } from "../service";
import Header from "../../layout/header";
import ErrorMSG from "../../error/error";
import { useHistory } from "react-router-dom";
  
function NewAd({onLogin}){
  const history = useHistory()
    const [value, setValue] = useState ({name: '', sale: '', price: '', tags: [], photo: null})
    const {select, changeselect} = useState()
    const [logError, ErroronLogin] = useState('null')
    const [cat, setCats] = useState([])
    useEffect(()=> {
        GetTags().then(setCats)
    }, [])


    let errorLogin = ""
    
    const handlePhoto = (event) => {
      setValue({ ...value, photo: event.target.files[0] });
    }

    const handleTags = (event) => {
      if(event.target.checked){
        setValue({ ...value, tags: [...value.tags, event.target.value] });
      } else {
        let alltags = value.tags
        console.log(alltags)
        let tagremove = alltags.indexOf(event.target.value)
        alltags.splice(tagremove, 1);
        console.log(alltags)
        debugger
        setValue({ ...value, tags: alltags });
      }
      console.log(value)
    }

    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
        console.log(value)
      };
         
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let newad = await CreateAd(value);
            console.log(newad)
         //   const { from } = location.state || { from: { pathname: '/' } };
            history.replace('/adverts/' + newad.id);
          
        } catch (error) {
          console.log(value)
          console.log(error)
          ErroronLogin(error.status);
        }
      };

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
              Lo compro
            </option>
          </select>
            {cat.map(tag => (
              <label key={tag}>
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  onChange={handleTags}
                />
                {tag}
              </label>
            ))}
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