import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './Doctors.css'
import doctor from '../../../images/doctor.jpg';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
    return (
        <div>
            <header>
                <div className="about" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg')` }}>
                    <h1 className="about-heading">DOCTORS</h1>
                </div>
            </header>
            <h1 className="fw-bold mt-5">Our Doctors</h1>
            {doctors.length === 0 ?
                // loader
                <Spinner animation="grow" variant="primary" />
                :
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        doctors.map(doctor => {
                            // destructuring doctor object
                            const { id, picture, name, expert } = doctor;
                            return (<Col key={id}>
                                <Card>
                                    <Card.Img variant="top" src={picture} style={{ height: '300px' }} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className="text-primary fw-bold">{expert}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                    }
                </Row>}
        </div>
    );
};

export default Doctors;