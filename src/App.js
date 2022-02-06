import './App.css';
import ShowAllAds from './components/Ads/AdsPage/AdsPage';
import LoginPage from './components/auth/Login/loginPage';
import { useState } from 'react';
import NewAd from './components/Ads/NewAd/newAd';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound/Notfound';
import { AuthProvider } from './components/auth/context';
import Detail from './components/Ads/adDetail';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';
import { useEffect } from 'react/cjs/react.development';
//const HasToken = CheckTokenonInit()

function App({HasToken}) {
  
  const [isLogged, setIsLogged] = useState(HasToken)

  const handleLogin = () => {setIsLogged(true); console.log(isLogged)}
  const handleLogout = () => setIsLogged(false)

  useEffect(() => {
    console.log(isLogged)
    console.log(HasToken)
  }, [isLogged])
  const authProps = { isLogged, handleLogin, handleLogout };

  return (
      <AuthProvider {...authProps}>
        <Switch>
          <PrivateRoute exact path="/adverts/new">
            <NewAd/>
          </PrivateRoute>
          <PrivateRoute exact path="/adverts/:id">
            <Detail />
          </PrivateRoute>
          <PrivateRoute path="/adverts">
            <ShowAllAds />
          </PrivateRoute>
          <Route exact path="/login">
            {isLogged ?
              <ShowAllAds isLogged={handleLogin} /> :
              <LoginPage onLogin = {handleLogin } onLogout = {handleLogout}/>
            }
          </Route>
          <Route exact path="/">
            <Redirect to="/adverts" />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
  )
}
export default App;