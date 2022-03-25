import React from 'react';
import Order from '../Order/Order';

const Cart = (props) => {
    // console.log(props)
    const { cart } = props
    console.log(cart)
    return (
        <div>
            <p className='fs-5 fw-bold'>Selected Watch</p>
            <p>Select item:{cart.length}</p>
            <div>
                {
                    cart.map(watch => <Order watch={watch} key={watch.id}></Order>)
                }
            </div>
        </div>
    );
};

export default Cart;