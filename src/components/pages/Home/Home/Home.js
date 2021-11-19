import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CarsCollection from '../CarsCollection/CarsCollection';
import Footer from '../Footer/Footer';
import ShowReviews from '../ShowReviews/ShowReviews';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    const products = [{
        name: 'Toyota Corolla',
        price: '12 lakh',
        description: 'The Toyota Corolla is a series of subcompact and compact cars manufactured and marketed globally by Toyota. ',
        img: 'https://i.ibb.co/9T3HNcp/2010-Toyota-Corolla-CE-Front-Left-450x300.jpg'
    },
    {
        name: 'Toyota Premio',
        price: '14 lakh',
        description: 'The Toyota Premio is a mid-size sedan sold in Japan by Toyota. The Premio is an upscale, and more luxurious sedan in comparison to the Toyota Allion sedan, which has a more youthful, and sporting nature. ',
        img: 'https://i.ibb.co/jyGP0h9/Toyota-PREMIO-1-5-F-L-Package-450x300.jpg'

    },
    {
        name: 'Toyota Corolla Hatchback',
        price: '15 lakh',
        description: 'Toyota makes no substantial changes to the 2022 Corolla hatchback, which faces new competition from within the automakers own lineup in the form of the all-new ',
        img: 'https://i.ibb.co/gZbvGdR/Toyota-Corolla-Hatchback-XII-E210-450x300.jpg'

    },
    {
        name: 'Toyota vellfire',
        price: '25 lakh',
        description: 'Toyota Vellfire is a 7 seater MUV available in a price range of ₹ 89.85 . In the BS6 era, the Vellfire is powered by 2494 cc Hybrid (Electric + Petrol) engine which produces 115bhp of power and 198Nm of torque',
        img: 'https://i.ibb.co/cY0x1TT/toyota-vellfire-right-front-three-quarter5-450x300.jpg'

    },
    {
        name: 'Toyota corolla brown',
        price: '10 lakh',
        description: 'Toyota corolla is a 4 seater MUV available in a price range of ₹ 89.85 . In the BS6 era, the Vellfire is powered by 2494 cc Hybrid (Electric + Petrol) engine which produces 115bhp of power and 198Nm of torque',
        img: 'https://i.ibb.co/yh3qsMV/crla1503-05-s-1-450x300.jpg'
    },
    {
        name: 'Toyota cross',
        price: '12 lakh',
        description: 'Toyota cross is a family size suv',
        img: 'https://i.ibb.co/T44ZLjw/corolla-cross-gallery-promo-450x300.jpg'
    },
    {
        name: 'Toyota cross',
        price: '12 lakh',
        description: 'Toyota cross is a family size suv',
        img: 'https://i.ibb.co/yh3qsMV/crla1503-05-s-1-450x300.jpg'

    },
    {
        name: 'Toyota corolla back 2000s',
        price: '8 lakh',
        description: 'Toyota cross is a family size suv',
        img: 'https://i.ibb.co/RH7WJsP/2010-Toyota-Corolla-CE-Front-Left.jpg'
    },
    {
        name: 'Toyota truck',
        price: '8 lakh',
        description: 'Toyota truck means best for moving without hasstle',
        img: 'https://i.ibb.co/THXrK5q/classic-toyota-450x300.jpg'
    },
    {
        name: 'Toyota truck red',
        price: '50 lakh',
        description: 'Toyota truck means best for moving without hasstle',
        img: 'https://i.ibb.co/bL3ccvY/truckred.jpg'
    }


    ]

    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarsCollection></CarsCollection>
            <ShowReviews></ShowReviews>
            <AboutUs></AboutUs>
            <Footer></Footer>

        </>

    );
};

export default Home;