import React from 'react';
import './Footer.css';
import yt_icon from '../../assets/youtube_icon.png';
import tw_icon from '../../assets/twitter_icon.png';
import ig_icon from '../../assets/instagram_icon.png';
import fb_icon from '../../assets/facebook_icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={yt_icon} alt="" />
                <img src={tw_icon} alt="" />
                <img src={ig_icon} alt="" />
                <img src={fb_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms Of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyright-text">&copy; 2025 Kritik Sharma</p>
        </div>
    );
};

export default Footer;
