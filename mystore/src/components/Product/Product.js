import React from 'react';
import './product.css'
import '../Shop/Shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="productName">{props.product.name}</h4>
                <br />
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <br />
                <p><small>Only {props.product.stock} left in stock - order soon.</small></p>
                <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />  &nbsp;add to cart</button>
            </div>
        </div>
    );
};

export default Product;