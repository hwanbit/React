import {useState} from "react";

function Toggle3() {
    const [isToggleOn, setIsToggleOn]=useState(true);

    // 두번째 방법 : Arrow 함수 (Anonymous 함수)
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return(
        <button onClick={handleClick}>
            함수형 컴포넌트 {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle3;