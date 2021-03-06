import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { UserProvider } from './context/user.provider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App/>
      </UserProvider>
    </BrowserRouter>
  //</React.StrictMode>,
  ,
  document.getElementById('root')
);