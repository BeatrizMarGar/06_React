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
import NotFound from './components/notfound/Notfound';
import { AuthContextProvider } from './components/auth/context';
import { AllAds } from './components/Ads/service';

const HasToken = CheckTokenonInit()

function App() {
  
  const [isLogged, setIsLogged] = useState(HasToken)

  const handleLogin = () => setIsLogged(true)

  return (
    <Router>
      <AuthContextProvider value={isLogged, handleLogin}>
        <Switch>
          <Route path="/adverts/new">
            <NewAd/>
          </Route>
          <Route path="/adverts/:id">
            <Ad />
          </Route>
          <Route path="/adverts">
            <ShowAllAds />
          </Route>
          <Route path="/">
            <div>
              {isLogged ? <ShowAllAds isLogged={handleLogin}/> : <LoginPage onLogin={handleLogin} />}
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </AuthContextProvider>
    </Router>
  )
}
export default App;