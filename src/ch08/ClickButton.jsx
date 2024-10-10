// 기본적인 클릭 이벤트를 처리
// 버튼을 클릭하면 알림창이 표시되게 하시오.

import React, {Component, useState} from "react";

function ClickButton() {
    const [isClickOn, setIsClickOn]=useState(true);

    function handleClick() {
        alert("버튼을 클릭했습니다.");
        setIsClickOn((isClickOn) => !isClickOn);
    }

    return(
        <button onClick={handleClick}>
            함수형 컴포넌트 {isClickOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default ClickButton;