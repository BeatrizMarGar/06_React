import './App.css';
import Layout from './components/layout/layout';
import ShowAllAds from './components/Ads/AdsPage/AdsPage';
import LoginPage from './components/auth/Login/loginPage';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import NewAd from './components/Ads/NewAd/newAd';
import { CheckTokenonInit } from './utils/token';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ad from './components/Ads/ad';


const HasToken = CheckTokenonInit()

function App() {
  
  const [isLogged, setIsLogged] = useState(HasToken)
  console.log(HasToken)

  const handleLogin = () => {alert("ejecutando"); setIsLogged(true)}
  return (
    <Router>
      <Switch>
      <Route path="/">
        <div>
          {
          //isLogged ? <ShowAllAds/> : <LoginPage onLogin={handleLogin} />
          isLogged ? <ShowAllAds isLogged={handleLogin}/> : <LoginPage onLogin={handleLogin} />
          }
        </div>
      </Route>
      <Route path="/adverts">
        <ShowAllAds></ShowAllAds>
      </Route>
      <Route path="http://localhost:3001/api/v1/adverts/6673d065-21a4-4de6-be61-681e020903b5">
        <Ad />
      </Route>
      <Route>
        <p>página no encontrada</p>
      </Route>
      </Switch>
    </Router>
  )
}

export default App;