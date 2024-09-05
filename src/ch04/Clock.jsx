import React from "react";
import './Clock.css';

function Clock(props) {
    return (
        <div>
            <h1>Clock Test</h1>
            <div className="Custom">{new Date().toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock;