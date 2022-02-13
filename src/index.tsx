import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {App} from './App';
import {setupStore} from "./store";

import './index.css';
//import "./resources/themes/antd/components/antd.less"
//import  "./resources/themes/antd/components/antd.css"


const store = setupStore();
document.documentElement.setAttribute('data-theme', 'light')

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

