import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

import App from './App';
import { Provider } from 'react-redux';
import { storeLogin } from './services/reduxToolkit/UserSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeLogin}>
        <App />
    </Provider>

);

