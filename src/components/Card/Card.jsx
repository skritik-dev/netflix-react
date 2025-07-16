import React, { useEffect, useRef, useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, category }) => {
    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGI0YTAyODU2ZWIwZTZiM2M0YWUwNzRjZGE3MTY3MSIsIm5iZiI6MTc1MjU3NTE4MC4wMTgsInN1YiI6IjY4NzYyY2NjNjM1MDQ1OWEzMjljYjA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q73ZM8p1Cn1l3zkCe_IgpfHvz-GUcnDRmTL9DVS5QY8',
        },
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => setApiData(res.results))
            .catch((err) => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="card">
            <h2>{title ? title : 'Now Playing'}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return (
                        <Link
                            to={`/player/${card.id}`}
                            className="card-item"
                            key={index}
                        >
                            <img
                                src={
                                    `https://image.tmdb.org/t/p/w500/` +
                                    card.backdrop_path
                                }
                                alt=""
                            />
                            <p>{card.original_title}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
