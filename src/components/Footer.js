import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="box">
            <div className="footer-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="row">
                <div className="column">
                        <p className="heading">Logo + socials</p>
                        <a href="#/">M&N Zoo</a>
                        <a href="#/Socials" className="fa fa-facebook"></a>
                        <a href="#/Socials" className="fa fa-twitter"></a>
                        <a href="#/Socials" className="fa fa-linkedin"></a>
                        <a href="#/Socials" className="fa fa-youtube"></a>
                        <a href="#/Socials" className="fa fa-instagram"></a>
                    </div>
                    <div className="column">
                        <p className="heading">Links</p>
                        <a className="footer-link" href="/#/">
                            Home
                        </a>
                        <a className="footer-link" href="#/Tickets">
                            Tickets
                        </a>
                        <a className="footer-link" href="#/Events">
                            Events
                        </a>
                        <a className="footer-link" href="#/Mission">
                            Mission
                        </a>
                    </div>
                    <div className="column">
                        <p className="heading">Support Us</p>
                        <a className="footer-link" href="#/Donations">
                            Donations
                        </a>
                        <a className="footer-link" href="#/Membership">
                            Membership
                        </a>
                        <a className="footer-link" href="#/Socials">
                            Socials
                        </a>
                        <a className="footer-link" href="#/Shop">
                            Shop
                        </a>
                    </div>
                    <div className="column">
                        <p className="heading">Kids Corner</p>
                        <a className="footer-link" href="#/Kids">
                            Kids
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
