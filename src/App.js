import './App.css';
import Layout from './components/layout/layout';
import ShowAllAds from './components/Ads/AdsPage/AdsPage';
import LoginPage from './components/auth/Login/loginPage';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const handleLogin = () => setIsLogged(true)
  
  return (
   // <LoginPage />
    <div>
      {isLogged ? (<ShowAllAds isLogged={isLogged}/>) : (<LoginPage onLogin={handleLogin}/>)}
    </div>
  )
}

export default App;
