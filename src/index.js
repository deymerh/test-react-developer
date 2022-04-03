import React from 'react';
import ReactDOM from 'react-dom';
import { AppMain } from './AppMain';
import './styles/index.scss';
import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in';

ReactDOM.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>,
  document.getElementById('root')
);

