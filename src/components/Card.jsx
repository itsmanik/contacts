import React from "react";
import ReactDOM from "react-dom";


function Card(props) {
    return <div>
        <h2>{props.name}</h2>
        <img src={props.imgUrl}></img>
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
}

export default Card;