import { login } from "../service";
import T from 'prop-types'
import { useState, useMemo } from "react";
import FormField from "../../common/formField";
import ErrorMSG from "../../error/error";
import { useAuthContext } from "../context";

function LoginPage({ location, history }){
    // declaro los cambios en usuario y contraseña
    const [value, setValue] = useState ({email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false);
    const [check, isChecked] = useState(false)
    const [logError, ErroronLogin] = useState('null')
    const {handleLogin} = useAuthContext()

    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // call to api - send value
        /*
        setIsLoading(true);
        login(value, check)
        */
        //onLogin()
       // handleLog()
        //resetError();
        try {
            await login(value, check)
            .then(setIsLoading(false))
            .then(handleLogin())
            
            const { from } = location.state || { from: { pathname: '/' } };
            history.replace(from);
            
        } catch (error) {
            console.log(error)
            if (error.status == '401'){
              ErroronLogin('Usuario/contraseña equivocada');
            }
            
         // setError(error);
         setIsLoading(false);
        }
      };
    return (
        <div className="loginPage">
        <h1 className="loginPage-title">Log in to nodepop</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <FormField
            type="text"
            name="email"
            label="phone, email or username"
            className="loginForm-field"
            value={value.email}
            onChange={handleChange}
            autofocus
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="loginForm-field"
            value={value.password}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="savetoken"
            value={value.savetoken}
            onChange={event => isChecked(event.target.checked)}
            //onChange={handleChange}
  
          />
          <button
            className="loginForm-submit"
            type="submit"
            variant="primary"
           // disabled={buttonDisabled}
          >
            Log in
          </button>
          
          <ErrorMSG mensaje={logError} />
        </form>
          {/*error && (
          <div onClick={resetError} className="loginPage-error">
            {error.message}
          </div>
        )*/} 
      </div>
      
  
    )

}

/*
LoginPage.propTypes = {
  location: T.shape({ state: T.shape({ from: T.object.isRequired }) })
    .isRequired,
  history: T.shape({ replace: T.func.isRequired }).isRequired,
};
*/
export default LoginPage;