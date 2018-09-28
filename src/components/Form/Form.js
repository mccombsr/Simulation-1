import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            imageURL: '',
            productName: '',
            price: 0
        }
        this.handleImageURL = this.handleImageURL.bind(this);
        this.handleProductName = this.handleProductName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
    }

    handleImageURL(e){
        var value = e.target.value;
        this.setState({
            imageURL: value
        });
        console.log(this.state)
    }

    handleProductName(e){
        var value = e.target.value
        this.setState({
            productName: value
        })
        console.log(this.state)
    }

    handlePrice(e){
        var value = e.target.value
        this.setState({
            price: value
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h2>Form</h2>
                <h3>Image URL:</h3>
                <input className='input-box'type='text' 
                    onChange={this.handleImageURL}
                />
                <h3>Product Name:</h3>
                <input className='input-box'type='text' 
                    onChange={this.handleProductName}
                />
                <h3>Price:</h3>
                <input className='input-box'type='text' 
                    onChange={this.handlePrice}
                />
                <input type='reset' value='Cancel'/>
                <input type='submit' value='Add to Inventory'/>
            </div>
        )
    }
}