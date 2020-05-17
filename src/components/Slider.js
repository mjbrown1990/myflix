import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ movies }) => {
    if (movies.length === 0) {
        return (
            <div className="movie-grid movie-grid--loading">
                {[...Array(4)].map((_, i) => <div key={i} className="loading__placeholder" />)}
            </div>
        )
    }

    return (
        <div className="movie-grid">
            {movies.map(movie => {
                if (!movie.backdrop_path) {
                    return null;//Not all movies returned by the API have a backdrop image!
                }

                return (
                    <div key={movie.id} className="movie-grid__item">
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt={movie.title} />
                    </div>
                )
            })}
        </div>
    )
}

Slider.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            backdrop_path: PropTypes.string
        })
    )
}

export default Slider;
