import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./Card.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;