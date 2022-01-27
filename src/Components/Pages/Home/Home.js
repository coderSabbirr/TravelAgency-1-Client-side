import React from 'react';
import Footer from './../../Shared/Footer/Footer';
import Header from './../../Shared/Header/Header';
import Blogs from './Blogs/Blogs';
import Slider from './Slider/Slider';

const Home = () => {

    return (
        <div>
            <Header />
            <Slider />
            <Blogs />
            <Footer />
        </div>
    );
};


export default Home;