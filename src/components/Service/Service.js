import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Service = () => {
    const { serviceId } = useParams()
    const { services } = useAuth();
    const selectedService = services.find((service) => service.id === Number(serviceId));

    const { picture, title, price, tests, description } = selectedService;
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center py-5">
                <Card style={{ width: '25rem' }}>
                    <div className="overflow-hidden">
                        <Card.Img variant="top" src={picture} />
                    </div>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="d-flex justify-content-between mx-3 py-2">
                            <h5>Price: {price}</h5>
                            <h5>Tests: {tests}</h5>
                        </div>
                        <Card.Text>
                            <small>{description}</small>
                        </Card.Text>
                        <Button className="btn btn-primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;