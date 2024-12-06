import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import "./Strawberry.css";

function Strawberry() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <CardContainer />
        </div>
    );
}

export default Strawberry;