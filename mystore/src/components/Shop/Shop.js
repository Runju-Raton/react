import React from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    console.log(first10);
    return (
        <div>
            <ul>
                {
                    first10.map(product=><li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;