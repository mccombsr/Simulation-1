import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {


    render() {
        let inventory = this.props.inventory.map(product => {
            return(
            <Product name={product.product_name} 
            price={product.price} 
            image={product.image_url} />
        )
    })
        return (
            <div>
                <h2>Dashboard</h2>      
                {inventory}
            </div>
        )
    }
}