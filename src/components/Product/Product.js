import React from 'react';

export default function Product(props) {
    return (
        <div>
            <h3>Product</h3>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <img src={props.image}/>
        </div>
    )
}