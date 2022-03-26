import React from 'react';

const Order = (props) => {
    console.log(props.watch)
    return (
        <div className='fw-bold'>
            Name : {props.watch.name}
        </div>
    );
};

export default Order;