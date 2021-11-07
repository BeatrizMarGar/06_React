import { login } from "../service";
import { useState, useMemo } from "react";
import FormField from "../../common/formField";

function LoginPage({onLogin}){
    // declaro los cambios en usuario y contraseña
    const [value, setValue] = useState ({email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false);
    const [check, isChecked] = useState(false)
    
    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // call to api - send value
        setIsLoading(true);
        //resetError();
        
        try {
            await login(value, check);
            setIsLoading(false);
            onLogin()
         // const { from } = location.state || { from: { pathname: '/' } };
         // history.replace(from);
          
        } catch (error) {
            console.log(error)
            //isLogged = false
            
         // setError(error);
         setIsLoading(false);
        }
      };
    return (
        <div className="loginPage">
        <h1 className="loginPage-title">Log in to Twitter</h1>
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
            onChange={event => isChecked(event.target.checked)}
  
          />
          <button
            className="loginForm-submit"
            type="submit"
            variant="primary"
           // disabled={buttonDisabled}
          >
            Log in
          </button>
        </form>
          {/*error && (
          <div onClick={resetError} className="loginPage-error">
            {error.message}
          </div>
        )*/} 
      </div>
  
    )

}

export default LoginPage;