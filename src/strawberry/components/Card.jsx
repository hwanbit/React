import React from "react";

function Card({name, ingredients, instruction, imageUrl}) {
    return (
        <div className="card">
            <img src={imageUrl} alt={name}/>
            <h3>{name}</h3>
            <p>카드를 클릭하여{ingredients}</p>
            <p>레시피를 확인하세요📖{instruction}</p>
        </div>
    );
}

export default Card;