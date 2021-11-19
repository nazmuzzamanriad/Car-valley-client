import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import side from '../../../../images/side.jpg'
import front from '../../../../images/front.jpg'
import indoor from '../../../../images/indoor.jpg'


const Banner = () => {
    return (
        <>
            {/* <Container > */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={front}
                        alt="First slide"
                        width='1920px'
                        height='528px'
                    />
                    <Carousel.Caption>
                        <h3 style={{ fontWeight: '900' }}>Front Side of New suv</h3>
                        <p style={{ fontSize: '25px' }}>Hybrid Suv</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={side}
                        alt="Second slide"
                        width='1920px'
                        height='528px'
                    />

                    <Carousel.Caption>
                        <h3 style={{ fontWeight: '900' }}>Perfect Ground Clearance</h3>
                        <p style={{ fontSize: '25px' }}>OFF Road never can be a Problem now</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={indoor}
                        alt="Third slide"
                        width='1920px'
                        height='528px'
                    />

                    <Carousel.Caption>
                        <h3 style={{ fontWeight: '900' }}>Brand New Interior</h3>
                        <p style={{ fontSize: '25px' }}>Goes with your style</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* </Container> */}

        </>
    );
};

export default Banner;