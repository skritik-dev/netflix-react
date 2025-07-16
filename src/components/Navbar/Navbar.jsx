import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_image from '../../assets/profile_img.png';
import log_out_icon from '../../assets/log_out_icon.svg';
import { signout } from '../../firebase.js';

const Navbar = () => {
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        });
    }, []);

    return (
        <div ref={navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} className="icons" alt="" />
                <p>Kids</p>
                <img src={bell_icon} className="icons" alt="" />
                <div className="navbar-profile">
                    <img src={profile_image} className="profile" alt="" />
                    <img
                        src={log_out_icon}
                        onClick={signout}
                        className="logout"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
