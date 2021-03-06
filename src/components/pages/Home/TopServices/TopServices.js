import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const TopServices = () => {
    // managing Top services data
    const { services } = useAuth();
    const filteredServices = services.filter(service => service.id <= 8)
    return (
        <div className="container">
            <h1 className="py-5 fw-bold">Top Services</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    filteredServices.map(fService => {
                        // destructuring fSerice
                        const { picture, title, price, id } = fService;
                        return (<Col key={id}>
                            <Card className="card">
                                <div className="img-container">
                                    <Card.Img variant="top" src={picture} className='image' />
                                </div>
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
            </Row>
            <Link to="/services"><button className="btn btn-success my-5 px-3 fw-bold">See more</button></Link>
        </div>
    );
};

export default TopServices;