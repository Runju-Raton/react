import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData;
   

const [cart, setCart]=useState([]);
 
const handleAddProduct=(product)=>{
    console.log(cart);
    const newCart=[...cart, product];
    setCart(newCart);
}; 
    return (
        <div className="shop-container">
            <div className="product-container">

            <ul>
                {
                    first10.map(product=><Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }
            </ul>

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
              
            </div>

        </div>
    );
};

export default Shop;