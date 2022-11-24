import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="website logo" />
                <p>Sell & Buy Deals Ltd.<br />Providing Used Mobile Phones Resale Business 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
                <Link className="link link-hover">Branding</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
                <Link className="link link-hover">About us</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;