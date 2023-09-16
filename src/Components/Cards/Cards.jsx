import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleAddCourse}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./Card.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4">
            {
                cards.map(card => <Card key={card.id} handleAddCourse={handleAddCourse} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleAddCourse: PropTypes.func.isRequired
}

export default Cards;