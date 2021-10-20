import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider01 from '../../images/slider/1b.jpg';
import slider02 from '../../images/slider/2b.jpg';
import slider03 from '../../images/slider/3b.jpg';

const Banner = () => {
    return (
        <Carousel className="container">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 slider-height"
                src={slider01}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Caramel Apple Manicure & Pedicure</h3>
                <p>Get ready for fall with this scrumptious hand and foot treatment … starting off with a Hot Apple Cider Soak, followed by a Whipped Honey Salt Scrub, warming </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 slider-height"
                src={slider02}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Calming Antara Ritual</h3>
                <p>This super hydrating therapeutic wrap starts with a full body dry brushing exfoliation before you are cocooned in velvety organic shea butter that is infused</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-height"
                src={slider03}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Espresso Detox Treatment</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;