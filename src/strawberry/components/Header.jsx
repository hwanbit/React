import React from "react";
import logoImage from "../imgs/logoImg.png";

function Header() {
    return (
        <header className="header">
            <div className="logo">STRAWBERRY</div>
            <img className="logoImg" src={logoImage}/>
            <nav>
                <a href="/">Home</a>
                <a href="https://www.bbc.co.uk/food/recipes/strawberry_crme_ptissire_01349">BBC Food</a>
                <a href="https://www.foodandwine.com/fruits/berries/strawberry/30-days-strawberry-recipes">FOOD & WINE</a>
            </nav>
        </header>
    );
}

export default Header;