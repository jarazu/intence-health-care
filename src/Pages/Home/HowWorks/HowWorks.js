import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HowWorks.css'

import f1 from '../../../images/fages/1.png';
import f2 from '../../../images/fages/2.png';
import f3 from '../../../images/fages/3.png';

const HowWorks = () => {
    
    return (
        <div id="phase">
        <Container className="my-5">
            <Row>
                <h2>How It Works</h2>
                <p>
                    Our ultimate, age-defying facial therapy combines transformative clinical grade products, sculpting massage techniques and micro-current Remodeling Face technology to dramatically tone,
                </p>
            </Row>
            <Row className="fages my-5">
                <Col xs={12} sm={6} md={4} className="fages-box">
                    <img src={f1} alt="" />
                    <h2>2nd Phase</h2>
                    <p>A truly unique skin treatment that embraces beauty rooted in wellness, understanding that radiant skin is a reflection of health on the inside. An in-depth consultation identifies.</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="fages-box">
                    <img src={f2} alt="" />
                    <h2>1st Phase</h2>
                    <p>An antioxidant treatment that restores vitality to sun damaged skin and helps minimize the signs of premature aging. 100% pure vitamin C will stimulate collagen production and renew skin firmness.</p>
                </Col>
                
                <Col xs={12} sm={6} md={4} className="fages-box">
                    <img src={f3} alt="" />
                    <h2>Final Phase</h2>
                    <p>Designed for men, this results oriented facial includes a deep cleanse, exfoliation, mask and treatment serum customized to you skin needs. Includes a massage to the face, arms and upper back.</p>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
};

export default HowWorks;