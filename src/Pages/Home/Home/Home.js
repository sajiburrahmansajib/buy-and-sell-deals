import React from 'react';
import Carousel from '../Carousel/Carousel';
import Info from '../Info/Info';
import ProductCatagory from '../ProductCatagory/ProductCatagory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ProductCatagory></ProductCatagory>
            <Info></Info>
        </div>
    );
};

export default Home;