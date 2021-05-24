import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <img className="product-picture" src={props.image} alt={props.name + " afbeelding"} />
            <p className="product-name">{props.name}</p>
            <p className="product-price"><span>&#8364;</span>{props.price}</p>
        </article>
    )
}
