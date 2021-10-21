import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TopDoctors = () => {
    // fetching doctors data
    const [topDoctors, setTopDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setTopDoctors(data))
    }, [])
    // filtering doctors data
    const filteredDoctors = topDoctors.filter(topDoctor => topDoctor.id <= 4)
    return (
        <div className="container">
            <h1 className="fw-bold">Our Doctors</h1>
            <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                {
                    filteredDoctors.map(doctor => {
                        // destructuring doctor object
                        const { id, picture, name, expert } = doctor;
                        return (<Col key={id}>
                            <Card>
                                <div className="overflow-hidden">
                                    <Card.Img variant="top" src={picture} style={{ height: '300px' }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text className="text-primary fw-bold">{expert}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default TopDoctors;