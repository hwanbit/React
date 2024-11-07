import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import WarningBanner from "./WarningBanner";

function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <WarningBanner warning={false}/>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    );
}

export default LoginControl2;