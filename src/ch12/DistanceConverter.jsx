import React, {useState} from "react";
import styles from "./DistanceConverter.module.css";
import DistanceInput from "./DistanceInput";

function toKilometers(miles) {
    return miles * 1.60934;
}

function toMiles(kilometers) {
    return kilometers / 1.60934;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);

    if(Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function DistanceConverter(props) {
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState('km');

    const handleMilesChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    }

    const handleKilometersChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    }

    const kilometers = unit === "mile" ? tryConvert(distance, toKilometers) : distance;
    const miles = unit === "km" ? tryConvert(distance, toMiles) : distance;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>거리 단위 변환기</h1>
            <div className={styles.inputContainer}>
                <DistanceInput unit="km" distance={kilometers} onDistanceChange={handleKilometersChange}/>
                <DistanceInput unit="mile" distance={miles} onDistanceChange={handleMilesChange}/>
            </div>
            <p className={styles.result}>
                {kilometers}km는 {miles}마일입니다.
            </p>
        </div>
    );
}

export default DistanceConverter;