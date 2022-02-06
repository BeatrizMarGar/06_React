import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import storage from './utils/storage'
import { configureClient } from './api/client';
import App from './App';

const accessToken = storage.get("auth")
configureClient({accessToken})
console.log(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App HasToken={!!accessToken}/>
    </Router>
  </React.StrictMode>,
  
  document.getElementById('root'),
);
