import React from "react";

function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1>회원 가입을 해주세요.</h1>;
}

export {UserGreeting, GuestGreeting};