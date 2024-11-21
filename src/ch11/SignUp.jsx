import React, {useState} from "react";
import "./SignUp.css";

function SignUp(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('남자');
    const [interests, setInterests] = useState('');

    const handleSubmit = (event) => {
        alert(`이름 : ${name}\n이메일 : ${email}\n성별 : ${gender}\n관심사 : ${interests}`);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name" :
                setName(target.value.toUpperCase());
                break;
            case "email" :
                setEmail(target.value);
                break;
            case "password" :
                setPassword(target.value);
                break;
            case "gender" :
                setGender(target.value);
                break;
            case "interests" :
                setInterests(target.value);
                break;
        }
    }

    return(
        <div className="signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    이름 :
                    <input id="name" type="text" value={name} onChange={handleChange} required/>
                </label>
                <label>
                    이메일 :
                    <input id="email" type="email" value={email} onChange={handleChange} required/>
                </label>
                <label>
                    비밀번호 :
                    <input id="password" type="password" value={password} onChange={handleChange} required/>
                </label>
                <label>
                    성별 :
                    <select id="gender" value={gender} onChange={handleChange}>
                        <option>남자</option>
                        <option>여자</option>
                    </select>
                </label>
                <label>
                    관심사 :
                    <textarea id="interests" value={interests} onChange={handleChange} placeholder="관심사를 입력하세요."/>
                </label>
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;