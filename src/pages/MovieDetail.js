import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css'; // Pastikan untuk mengimpor CSS

const movieData = [
    {
        title: "John Wick",
        id: 1,
        rate: 4,
        genre: "action, crime",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    {
        title: "John Wick",
        id: 2,
        rate: 4,
        genre: "action, crime",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    // Tambahkan film lainnya di sini...
];

const MovieDetail = () => {
    const { id } = useParams(); // Mengambil ID dari URL
    const navigate = useNavigate(); // Menggunakan navigate

    // Temukan film berdasarkan ID
    const movie = movieData.find(movie => movie.id === parseInt(id)); // Konversi id ke integer

    const handleBack = () => {
        navigate('/movie'); // Kembali ke halaman movie
    };

    if (!movie) {
        return <div>Film tidak ditemukan</div>; // Menangani jika film tidak ditemukan
    }

    return (
        <div className="movie-detail">
            <h1 className="movie-title">{movie.title}</h1>
            <img src={movie.img} alt={movie.title} className="movie-image" />
            <p className="movie-description">Genre: {movie.genre}</p>
            <p className="movie-description">Rating: {movie.rate} / 5</p>
            <button className="back-button" onClick={handleBack}>Kembali</button>
        </div>
    );
};

export default MovieDetail;
