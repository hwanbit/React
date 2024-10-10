import React, {useState} from "react";

// bind 대신에 클래스 필드 문법으로 코드 변경
function ConfirmButton3(props) {
    const[isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button onClick={handleConfirm} disabled = {isConfirmed}>
            ConfirmButton3 {isConfirmed ? "확인 완료" : "확인하기"}
        </button>
    );
}

export default ConfirmButton3;