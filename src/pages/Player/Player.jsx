import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: '',
    });

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
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => setApiData(res.results[0]))
            .catch((err) => console.error(err));
    }, []);

    const formattedDate = apiData.published_at.split('T')[0];

    return (
        <div className="player">
            <img src={back_arrow} alt="" onClick={() => navigate(-1)} />
            <iframe
                width="90%"
                height="90%"
                src={`https://www.youtube.com/embed/${apiData.key}`}
                frameborder="0"
                title="trailer"
                allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{formattedDate}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
};

export default Player;
