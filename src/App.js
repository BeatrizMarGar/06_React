import './App.css';
import Layout from './components/layout/layout';
import ShowAllAds from './components/Ads/AdsPage/AdsPage';
import LoginPage from './components/auth/Login/loginPage';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import NewAd from './components/Ads/NewAd/newAd';

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = () => setIsLogged(true)
  return (
      <div>
        {
        //isLogged ? <ShowAllAds/> : <LoginPage onLogin={handleLogin} />
        isLogged ? <NewAd/> : <LoginPage onLogin={handleLogin} />
        }
      </div>
  )
}

export default App;
