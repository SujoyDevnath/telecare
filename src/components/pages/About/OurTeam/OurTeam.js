import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './OurTeam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// font awesome icons
const facebook = <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-primary" />
const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" className="text-primary" />
const instagram = <FontAwesomeIcon icon={faInstagram} size="2x" className="text-primary" />

const OurTeam = () => {
    // fetching members data from public
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div>
            <h1 className="fw-bold mt-5">Meet Our Team</h1>
            {members.length === 0 ?
                // loader
                <Spinner animation="grow" variant="primary" />
                :
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        members.map(member => {
                            // destructuring member object
                            const { id, picture, name, designation } = member;
                            return (<Col key={id}>
                                <Card>
                                    <div className="card-image">
                                        <Card.Img variant="top" src={picture} style={{ height: '300px' }} />
                                        {/* img overlay animations */}
                                        <Card.ImgOverlay className="overlay d-flex justify-content-evenly align-items-center">
                                            <div>{facebook}</div>
                                            <div>{twitter}</div>
                                            <div>{instagram}</div>
                                        </Card.ImgOverlay>
                                    </div>
                                    {/* card body */}
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className="text-primary fw-bold">{designation}</Card.Text>
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

export default OurTeam;