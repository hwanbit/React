import React from "react";
import bgImage from "../imgs/bg.jpg"

function Hero() {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1>겨울, 딸기와 함께</h1>
            <p>추위가 반가운 이유는 딸기를 먹을 수 있다는 사실에 기반한다.</p>
        </div>
    );
}

export default Hero;