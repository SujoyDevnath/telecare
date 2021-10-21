import { Card, Col, Row, Spinner } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import serviceImage from '../../../images/services.jpg'
import './Services.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Services = () => {
    // getting data from hooks
    const { services } = useAuth();
    console.log(services);
    return (
        <div>
            <header>
                <div className="services" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${serviceImage})` }}>
                    <h1 className="about-heading">SERVICES</h1>
                </div>
            </header>
            <h1 className="fw-bold pt-5">Our services</h1>
            {services.length === 0 ?
                // loader
                <Spinner animation="grow" variant="primary" />
                :
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        services.map(service => {
                            // destructuring service object
                            const { picture, title, price, id } = service;
                            return (<Col key={id}>
                                <Card className="card">
                                    {/* card-img container */}
                                    <div className="img-container">
                                        <Card.Img variant="top" src={picture} className='image' />
                                    </div>
                                    {/* card-body*/}
                                    <Card.Body>
                                        <h4 className="text-start">{title}</h4>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="price">${price}</span>
                                            <Link to={`/service/${id}`}><button className="btn-primary">Details</button></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                </Row>}
        </div>
    );
};

export default Services;