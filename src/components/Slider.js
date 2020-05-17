import React from 'react';

const Slider = ({ movies }) => (
    <div className="movie-grid">
        {movies.map(movie => (
            <div key={movie.id} className="movie-grid__item">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            </div>
        ))}
    </div>
)

export default Slider;