import React from "react";
import './Notification.css';

class Notification extends React.Component {
    constructor(props) {
        super(props); //Component가 생성될 때 prop을 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.

        this.state = {};
    }

    render() {
        return (
            <div>
                <span>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;