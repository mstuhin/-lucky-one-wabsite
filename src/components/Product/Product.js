import React from 'react';

const Product = (props) => {
    const { name, picture, price, id } = props.product;
    return (
        <div>
            <img src={picture} alt=""></img>
        </div>
    );
};




export default Product;