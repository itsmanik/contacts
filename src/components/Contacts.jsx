import React from "react";
import ReactDOM from "react-dom";
import contacts from "../contacts.js";
import Card from "./Card.jsx";

function createCard(card) {
    return <Card name={card.name} imgUrl={card.imgUrl} phone={card.phone} email={card.email} />
}

function Contacts() {
    return <div className="cards">
        {contacts.map(createCard)}
    </div>
}

export default Contacts;