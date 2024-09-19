import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ch03/Book.css';
import './ch04/Button.css';
import './ch04/Clock.css';
import './ch06/Notification.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from "./ch04/Clock";
import CommentList from "./ch05/CommentList";
import NotificationList from "./ch06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(
    ()=>{
        root.render(
            <React.StrictMode>
                <NotificationList />
            </React.StrictMode>
        );
    }
    ,1000
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();