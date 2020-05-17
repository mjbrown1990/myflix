import React from 'react';
import { connect } from "react-redux";

import Genre from "./Genre";
import { addMovieGenres } from "../actions";

class Genres extends React.Component {

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-GB`)
            .then(res => res.json())
            .then(({ genres }) => this.props.dispatch(addMovieGenres(genres)));
    }

    render() {
        if (!this.props.genres) {
            return null;
        }

        return (
            <div className="genres">
                {this.props.genres.map(genre => <Genre key={genre.id} id={genre.id} name={genre.name} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    genres: state.genres.movie,
});

export default connect(mapStateToProps)(Genres);