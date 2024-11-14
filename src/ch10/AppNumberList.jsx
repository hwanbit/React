import React from "react";

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li> // 리스트 항목에서 Key값을 설정하지 않으면 Error 메시지 발생
    );

    return (
        <ul>{listItems}</ul>
    );
}

function AppNumberList() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers={numbers}/>
        </div>
    );
}

export default AppNumberList;