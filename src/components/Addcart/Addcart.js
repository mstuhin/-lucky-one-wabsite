import React from 'react';
import './Addcart.css'
const Addcart = (props) => {
    const { name, picture } = props.car;



    return (
        <div className='car-pic'>
            <img src={picture} alt=""></img>
            <p>{name}</p>

        </div>
    );
};

export default Addcart;