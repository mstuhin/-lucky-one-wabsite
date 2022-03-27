import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'


const Product = (props) => {
    const { product, handleClick } = props;

    const { name, picture, price, id } = product;


    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p>ID:{id}</p>
            </div>

            <button onClick={() => handleClick(name.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>

        </div>
    );
};




export default Product;