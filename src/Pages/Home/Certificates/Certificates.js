import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import c1 from '../../../images/certificates/1.jpg';
import c2 from '../../../images/certificates/2.jpg';
import c3 from '../../../images/certificates/3.jpg';

const Certificates = () => {
    return (
        <div id="certificates">
        <Container className="my-5">
            <Row>
                <h4>Awards</h4>
                <h2>Certificates</h2>
                <p>
                    Our ultimate, age-defying facial therapy combines transformative clinical grade products, sculpting massage techniques and micro-current Remodeling Face technology to dramatically tone,
                </p>
            </Row>
            <Row className="my-5">
                <Col xs={12} sm={6} md={4} className="">
                    <img src={c1} alt="" className="img-fluid"/>
                </Col>
                <Col xs={12} sm={6} md={4} className="">
                    <img src={c2} alt="" className="img-fluid"/>
                </Col>
                
                <Col xs={12} sm={6} md={4} className="">
                    <img src={c3} alt="" className="img-fluid"/>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
};

export default Certificates;