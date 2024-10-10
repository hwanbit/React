// 클래스 필드 문법 사용하여 bind 문장을 작성하지 않는 방법

import React from "react";

class MyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state={isToggleOn : true}
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

export default MyButton;