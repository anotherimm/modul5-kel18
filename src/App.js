import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi'; // Icon untuk Game
import { FaBook } from 'react-icons/fa'; // Icon untuk Book
import './App.css';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Game from './pages/Game'; // Halaman Game
import Book from './pages/Book'; // Halaman Book
import MovieDetail from './pages/MovieDetail'; // Import Halaman Detail Film

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Wahyu Ramadhani</p>
      </header>
      <Routes>
        {/* Redirect from root URL to /movie */}
        <Route path="/" element={<Navigate to="/movie" replace />} />
        
        {/* Rute untuk halaman detail film */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        
        {/* Rute untuk halaman movie */}
        <Route path="/movie" element={<Movie />} />
        
        {/* Rute untuk halaman profile, game, dan book */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} /> {/* Route untuk Game */}
        <Route path="/book" element={<Book />} /> {/* Route untuk Book */}
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <GiGamepad className="icon" /> Game
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <FaBook className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
