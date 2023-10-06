import React from "react";
import ReactDOM from "react-dom";


function Card(props) {
    return <div className="card">
        <h2>{props.name}</h2>
        <div>
            <img src={props.imgUrl}></img>
        </div>
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
}

export default Card;