import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import hero from '../../assets/hero_banner.jpg';
import title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Card from '../../components/Card/Card.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero} alt="" className="hero-img" />
                <div className="hero-caption">
                    <img src={title} alt="" className="caption-img" />
                    <p className="caption">
                        Discovering his ties to a secret ancient order, a young
                        man living in modern Istanbul embarks on a quest to save
                        the city from an immortal enemy.
                    </p>
                    <div className="hero-btn">
                        <button className="btn">
                            <img src={play_icon} alt="" className="play-icon" />
                            Play
                        </button>
                        <button className="btn dark-btn">
                            <img src={info_icon} alt="" className="info-icon" />
                            More Info
                        </button>
                    </div>
                    <div className="hero-cards">
                        <Card />
                    </div>
                </div>
            </div>

            <div className="more-cards">
                <Card title={'Blockbuster Movies'} category={'top_rated'} />
                <Card title={'Only On Netflix'} category={'popular'} />
                <Card title={'Upcoming'} category={'upcoming'} />
                <Card title={'Recommended For You'} category={'now_playing'} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
