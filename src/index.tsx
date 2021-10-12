import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './assets/scss/index.scss';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


