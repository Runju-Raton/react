import React from 'react';

const Cart = (props) => {
    const total=props.cart.reduce((total,product)=>total+product.price,0);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items orders:{props.cart.length}</p>
            <p>Total price: {total}</p>
        </div>
    );
};

export default Cart;