

import { useEffect, useState } from 'react';
import Addcart from '../Addcart/Addcart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const handleClick = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }


            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
                {
                    cart.map(car => <Addcart
                        key={car.id}
                        car={car}
                    ></Addcart>)
                }
                <div className='btn-choose'>
                    <button>Choose 1 For me</button>
                    <br />
                    <button>Choose Again</button>

                </div>
            </div>
        </div>
    );
};

export default Shop