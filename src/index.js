import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import storage from './components/auth/Login/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth')
configureClient({accessToken})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App HasToken={!!accessToken}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
