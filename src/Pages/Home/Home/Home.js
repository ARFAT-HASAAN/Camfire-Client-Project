import React from 'react';
import Purchace from '../../purchase/Purchace';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Feature></Feature>

            <Reviews></Reviews>

        </div>
    );
};

export default Home;