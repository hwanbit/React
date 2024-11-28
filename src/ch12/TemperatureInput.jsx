import React, {useState} from "react";

const scaleName = {
    c:'섭씨',
    f:'화씨'
}

function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
    return (
        <fieldset>
            <legend>온도를 입력해 주세요(단위 : {scaleName[props.scale]}) : </legend>
            <input type="text" value={temperature} onChange={handleChange}/>
        </fieldset>
    )
}

export default TemperatureInput;