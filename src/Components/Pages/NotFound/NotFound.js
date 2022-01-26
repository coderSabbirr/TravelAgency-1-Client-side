import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './notFound.css';
import notFound from './notFound.svg';
const NotFound = () => {
    return (
        <>
        <Header />
        <div className="notFound">
            <img src={notFound} alt="" /><br/>
            <Link className="btn btn-primary mt-5" to="/home">Back To Home</Link>
        </div>
        <Footer />
       </>
    );
};

export default NotFound;