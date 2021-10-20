import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
        const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <Container>
                <Row>
                    {
                        services.map(service => <Col xs={12} sm={6} md={4} key={service.id}> <Service
                            key={service.id}
                            service={service}
                        ></Service></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;