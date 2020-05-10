import React from 'react';
import { connect } from "react-redux";

import { addBillboardMovie } from "../actions";

class Billboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-GB&page=1`)
            .then(res => res.json())
            .then(({ results }) => this.props.dispatch(addBillboardMovie(results[0])));
    }

    render() {
        if (!this.props.billboard.id) {
            return (<h1>Loading...</h1>);
        }

        return (
            <div className="billboard">
                <div
                    className="billboard__image"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.billboard.backdrop_path})`
                    }}
                />

                <div className="billboard__meta">
                    <h3 className="billboard__title">{this.props.billboard.title}</h3>
                    <h3 className="billboard__overview">{this.props.billboard.overview}</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    billboard: state.billboard.movie,
});

export default connect(mapStateToProps)(Billboard);