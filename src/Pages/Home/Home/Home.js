import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Carousel from '../Carousel/Carousel';
import Info from '../Info/Info';
import ProductCatagory from '../ProductCatagory/ProductCatagory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <ProductCatagory></ProductCatagory>
            <Info></Info>
        </div>
    );
};

export default Home;