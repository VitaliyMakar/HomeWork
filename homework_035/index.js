import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import store from "./store/store";
import App from './components/App';
import AppF from "./components/AppF";


ReactDOM.render(

    //Оборачиваем в Provider для использования объекта store в компоненте APP
    <Provider store={store}>
        <App />
        <AppF />
    </Provider>
    ,
  document.getElementById('root')
);

