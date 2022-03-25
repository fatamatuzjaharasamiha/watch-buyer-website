import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Shop.css';
const Shop = () => {
    const [watches, setWatches] = useState([])
    // console.log(watches)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div className='shopping-container row container'>
            <div className='col-10'>
                <div className="watch-container row">
                    <h1>Watch Buyer</h1>
                    <h4>Choose your watch</h4>
                    {
                        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
                    }
                </div>
            </div>
            <div className="cart-container col-2">

            </div>
        </div>
    );
};

export default Shop;