

import { useEffect, useState } from 'react';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>This is for products</h3>
            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;