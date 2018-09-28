import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
      this.state ={
        inventory: [
          {
            productName: 'hat',
            price: 2.25,
            imageURL: 'https://www.villagehatshop.com/photos/product/standard/4511390S61123/top-hats/mid-crown-wool-felt-top-hat.jpg'
          },
          {
            productName: 'shirt',
            price: 3.25,
            imageURL: 'http://cdn.shopify.com/s/files/1/2283/4877/products/KAH-CLASSIC-M-ORAN_1514885835027_grande.png?v=1514886732'
          },
          {
            productName: 'shorts',
            price: 4.25,
            imageURL: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dweaa1516a/product_images/0170436750012NEW_00_065.jpg?sw=458&sh=710&sm=fit'
          }
        ]
      }
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default App;
