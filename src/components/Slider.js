import React from 'react';
import Skeleton from 'react-loading-skeleton';

import LoadingSkeleton from "./LoadingSkeleton";

const Slider = ({ movies }) => {
    if (movies.length === 0) {
        return (
            <LoadingSkeleton>
                <div className="movie-grid movie-grid--loading">
                    <div className="loading__placeholder">
                        <Skeleton height="100%" />
                    </div>
                    <div className="loading__placeholder">
                        <Skeleton height="100%" />§
                    </div>
                    <div className="loading__placeholder">
                        <Skeleton height="100%" />§
                    </div>
                    <div className="loading__placeholder">
                        <Skeleton height="100%" />§
                    </div>
                </div>
            </LoadingSkeleton >
        )
    }

    return (
        <div className="movie-grid">
            {movies.map(movie => (
                <div key={movie.id} className="movie-grid__item">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                </div>
            ))}
        </div>
    )
}

export default Slider;