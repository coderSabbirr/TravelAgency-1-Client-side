import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (

        <div className="footer">
            <div className="container all-menu">
                <div className="row" style={{marginLeft:'auto', marginRight:'auto',justifyContent:"space-between"}}>
                    <div className="contect col-lg-3 col-md-6 col-12  order-lg-1 ">
                        <h3><i className="fas fa-headphones"></i><span className="ms-1">GOT QUESTIONS ?</span></h3>
                        <p >(001) 2345-6789</p>
                        <p>(001) 5823-6530</p>
                        <p><i className="fas fa-map-marker-alt"></i><span className="ms-1">184 Main Rd E, St Albans<br />
                            VIC 3021, Australia</span></p>
                        <a href="mailto:contact@company.com"><i className="fas fa-envelope"></i><span className="ms-1">contact@company.com</span></a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  order-lg-1 ">

                        <ul className="menu">
                            <h3>Infomation</h3>
                            <li className="menu-item">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/">Terms & Conditions</Link>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  order-lg-1 ">

                        <ul className="menu">
                            <h3>Useful links</h3>
                            <li className="menu-item">
                                <Link to="/storeLocation">Store Location</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/dashboard">My Account</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/">Latest News</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/">Size Guide</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12  order-lg-1 ">
                        <h3><i className="far fa-money-bill-alt"></i><span className="ms-1">GOT QUESTIONS ? WE ARE USING SAFE PAYMENTS</span></h3>
                        <li><img src="https://i.ibb.co/JnbCY6t/PROD1-500x.png" alt="payment" className="payment mb-2 mt-2" /></li>
                        <li><img src="https://i.ibb.co/fHWBpR7/payment.png" alt="Secured" className="secured mt-2" /></li>

                    </div>
                </div>

            </div>
            <div>
                <p className="copyright">Copyright © 2022  all rights reserved.</p>
            </div>
        </div>


    );
};

export default Footer;