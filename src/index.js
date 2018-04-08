import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter } from "react-router-dom";

const StoreInstance = Store();

ReactDOM.render((
    <Provider store={StoreInstance}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
