import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./ch03/Library";
import Clock from "./ch04/Clock";
import CommentList from "./ch05/CommentList";
import NotificationList from "./ch06/NotificationList";
import Accommodate from "./ch07/Accommodate";
import Toggle from "./ch08/Toggle";
import MyButton from "./ch08/MyButton";
import Toggle2 from "./ch08/Toggle2";
import Toggle3 from "./ch08/Toggle3";
import clickButton from "./ch08/ClickButton";
import ClickButton from "./ch08/ClickButton";
import Counter from "./ch08/Counter";
import InputTest from "./ch08/InputTest";
import ConfirmButton from "./ch08/ConfirmButton";
import ConfirmButton2 from "./ch08/ConfirmButton2";
import ConfirmButton3 from "./ch08/ConfirmButton3";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(
    ()=>{
        root.render(
            <React.StrictMode>
                <ConfirmButton3 />
            </React.StrictMode>
        );
    }
    ,1000
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();