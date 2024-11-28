import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./ch03/Library";
import ConfirmDialog from "./ch04/ConfirmDialog"
import Clock from "./ch04/Clock";
import CommentList from "./ch05/CommentList";
import NotificationList from "./ch06/NotificationList";
import Accommodate from "./ch07/Accommodate";
import Toggle from "./ch08/Toggle";
import MyButton from "./ch08/MyButton";
import Toggle2 from "./ch08/Toggle2";
import Toggle3 from "./ch08/Toggle3";
import ClickButton from "./ch08/ClickButton";
import Counter from "./ch08/Counter";
import InputTest from "./ch08/InputTest";
import ConfirmButton from "./ch08/ConfirmButton";
import ConfirmButton2 from "./ch08/ConfirmButton2";
import ConfirmButton3 from "./ch08/ConfirmButton3";
import Greeting from "./ch09/Greeting";
import LoginControl from "./ch09/LoginControl";
import Mailbox from "./ch09/Mailbox";
import LoginControl2 from "./ch09/LoginControl2";
import LandingPage from "./ch09/LandingPage";
// import Greeting from "./test/Greeting" (하나로 묶기)
import AppNumberList from "./ch10/AppNumberList";
import StudentAttendance from "./ch10/StudentAttendance";
import AppStudentAttendance from "./ch10/AppStudentAttendance";
import AttendanceCard from "./ch10/avatarAttendance/AttendanceCard";
import NameForm from "./ch11/NameForm";
import RequestForm from "./ch11/RequestForm";
import NameRequestForm from "./ch11/NameRequestForm";
import SignUp from "./ch11/SignUp";
import Calculator from "./ch12/Calculator";
import Calculator2 from "./ch12/Calculator2";
import Calculator3 from "./ch12/Calculator3";
import DistanceConverter from "./ch12/DistanceConverter";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(
    ()=>{
        root.render(
            <React.StrictMode>
                <DistanceConverter/>
            </React.StrictMode>
        );
    }
    // ,1000
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();