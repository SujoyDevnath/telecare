import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 m-0 pb-1">
            <Container>
                <footer>
                    <Row xs={1} md={4} className="g-4">
                        {/* first column */}
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Top services</h4>
                            <div>
                                <p className="m-0 pt-1">Covid-19 Disease</p>
                                <p className="m-0 pt-1">Medicine</p>
                                <p className="m-0 pt-1">Infectious Diseases</p>
                                <p className="m-0 pt-1">Psychotherapy</p>
                            </div>
                        </Col>
                        {/* second column */}
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Quick Links</h4>
                            <div>
                                <p className="m-0 pt-1">Home</p>
                                <p className="m-0 pt-1">Services</p>
                                <p className="m-0 pt-1">About us</p>
                                <p className="m-0 pt-1">Contact us</p>
                            </div>
                        </Col>
                        {/* third column */}
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Social Media</h4>
                            <div>
                                <p className="m-0 pt-1">Facebook</p>
                                <p className="m-0 pt-1">Instagram</p>
                                <p className="m-0 pt-1">Twitter</p>
                                <p className="m-0 pt-1">Youtube</p>
                                <p className="m-0 pt-1">Linked in</p>
                            </div>
                        </Col>
                        {/* fourth column */}
                        <Col className="text-white text-start">
                            <h4 className="pb-3 m-logo" >Telecare</h4>
                            <div>
                                <p className="m-0 pt-1">Gopalganj, Dhaka,<br /> Bangladesh.</p>
                                <p className="m-0 pt-1">+11 532 766 4545</p>
                                <p className="m-0 pt-1">info@telecare.com</p>
                            </div>
                        </Col>
                    </Row>

                    {/* copyright message */}
                    <h6 className="text-muted pt-5 pb-1">Copyright &copy; 2021 Telecare</h6>
                </footer>
            </Container>
        </div >
    );
};

export default Footer;