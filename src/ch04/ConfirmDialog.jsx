import React from "react";
import Button from "./Button"
import './Button.css';

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button className="ok">Confirm</Button>
            <Button className="no">Cancel</Button>
            <Button className="re">Reset</Button>{/* Use ConfirmButton here */}
        </div>
    );
}

export default ConfirmDialog;