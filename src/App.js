import './App.css';
import Layout from './components/layout/layout';
import ShowAllAds from './components/Ads/AdsPage/AdsPage';
import LoginPage from './components/auth/Login/loginPage';
import Private_Route from './components/auth/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import NewAd from './components/Ads/NewAd/newAd';
import { CheckTokenonInit } from './utils/token';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ad from './components/Ads/ad';
import NotFound from './components/notfound/Notfound';
import { AuthContextProvider } from './components/auth/context';
import { AllAds } from './components/Ads/service';
import Detail from './components/Ads/adDetail';

function App({HasToken}) {
  
  const [isLogged, setIsLogged] = useState(HasToken)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  //agrupo las props en authprops

  console.log(isLogged)
  const authprops = {isLogged, handleLogin, handleLogout}


  return (
      <AuthContextProvider {...authprops}>
        <Switch>
          <Private_Route exact path="/adverts/new">
            <NewAd/>
          </Private_Route>
          <Private_Route exact path="/adverts/:id">
            <Detail />
          </Private_Route>
          <Private_Route exact path="/adverts">
            <ShowAllAds />
          </Private_Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <div>
              {isLogged ? <ShowAllAds fil  isLogged={handleLogin}/> : <LoginPage onLogin={handleLogin} />}
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </AuthContextProvider>
  )
}
export default App;