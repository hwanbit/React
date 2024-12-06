import React from "react";
import Card from "./Card";
import apt from "../imgs/apt.jpg";
import oceanview1 from "../imgs/ocean1.jpg"
import oceanview2 from "../imgs/ocean2.jpg"

const listings = [
    {
        id: 1,
        title: "서울의 아늑한 아파트",
        price: 100000,
        rating: 4.9,
        imageUrl: `${apt}`
    },
    {
        id: 2,
        title: "제주도 바다 뷰 펜션",
        price: 150000,
        rating: 4.8,
        imageUrl: `${oceanview1}`
    },
    {
        id: 3,
        title: "부산 해운대 근처 호텔",
        price: 120000,
        rating: 4.7,
        imageUrl: `${oceanview2}`
    }
];

function CardContainer() {
    return (
        <div className="card-container">
            {listings.map(listing => (
                <Card key={listing.id} {...listing} />
            ))}
        </div>
    );
}

export default CardContainer;