import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createSelector } from 'reselect'

import { addMoviesToGenre } from "../actions";
import Slider from "./Slider";

const Genre = (props) => {

    useEffect(() => {
        async function fetchMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMD_API_KEY}&with_genres=${props.id}&sort_by=popularity.desc`);
            res.json().then(({ results }) => props.dispatch(
                addMoviesToGenre({
                    id: props.id,
                    movies: results
                })
            ));
        }

        if (props.movies.length === 0) {
            fetchMovies();
        }
    }, [props]);

    return (
        <div className="genre">
            <h3 className="genre__title">{props.name}</h3>
            <Slider movies={props.movies} />
        </div>
    )
}

Genre.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    movies: PropTypes.array,
}

const getGenres = (state) => {
    return state.genres.movie
};

const getGenreID = (_, props) => {
    return props.id;
}

const getMoviesForGenre = createSelector([getGenreID, getGenres], (id, genres) => {
    const genre = genres.find(genre => genre.id === id)

    if (!genre.hasOwnProperty('movies')) {
        genre.movies = [];
    }

    return genre.movies;
})

function mapState(state, props) {
    return {
        movies: getMoviesForGenre(state, props)
    };
}

export default connect(mapState)(Genre);
