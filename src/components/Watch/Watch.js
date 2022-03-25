import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Watch.css'
import { BsCartCheck } from 'react-icons/bs'
const Watch = (props) => {
    console.log(props.watch)
    const { picture, name, price } = props.watch
    return (
        <div className='watch col-4'>
            <Card className='mt-5 shadow-lg'>
                <div className='d-flex justify-content-center'>
                    <Card.Img className='card-img' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text>
                        price:{price}
                    </Card.Text>
                    <Button variant="dark">
                        <div className='d-flex fw-bold'>
                            <p className='fs-6 mt-1'>Add To Cart</p>
                            <BsCartCheck className='m-2'></BsCartCheck>
                        </div>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Watch;