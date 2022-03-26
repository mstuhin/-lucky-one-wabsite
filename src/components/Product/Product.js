import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, picture, price, id } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p>ID:{id}</p>
            </div>

            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};




export default Product;