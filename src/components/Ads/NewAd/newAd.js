import Layout from "../../layout/layout";
import { CreateAd, AllAds } from "../service";
import FormField from "../../common/formField";
import { useState } from 'react';

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
                    checked={Selector('true')}
                ></input>
                <input
                    type="radio"
                    name="sale"
                    value={value.sale}
                    checked={Selector('false')}
                    >
                    </input>
                <FormField
                    type="array"
                    name="tags"
                    label="tags"
                    value={value.tags}
                    onChange={handleChange}
                >
                </FormField>
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
                    Log in
                </button>
            </form>
        </Layout>
    )
}

export default NewAd;