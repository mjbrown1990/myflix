import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createSelector } from 'reselect'

import { addMoviesToGenre } from "../actions";
import Slider from "./Slider";

class Genre extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        // this.state = {
        //     genreIDs: [
        //         { id: 28, name: "Action" },
        //         { id: 16, name: "Animation" },
        //         { id: 35, name: "Comedy" },
        //         { id: 12, name: "Adventure" }
        //     ]
        // };
    }

    componentDidMount() {
        if (this.props.movies.length === 0) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMD_API_KEY}&with_genres=${this.props.id}&sort_by=popularity.desc`)
                .then(res => res.json())
                .then(({ results }) => this.props.dispatch(
                    addMoviesToGenre({
                        id: this.props.id,
                        movies: results
                    })
                ));
        }
    }

    render() {
        return (
            <div className="genre">
                <h3 className="genre__title">{this.props.name}</h3>
                <Slider movies={this.props.movies} />
            </div>
        )
    }
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
