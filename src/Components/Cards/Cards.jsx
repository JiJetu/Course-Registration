import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('./Card.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Cards;