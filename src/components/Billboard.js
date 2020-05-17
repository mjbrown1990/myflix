import React from 'react';
import { connect } from "react-redux";
import Skeleton from 'react-loading-skeleton';

import LoadingSkeleton from "./LoadingSkeleton";
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
            return (
                <LoadingSkeleton>
                    <div className="billboard">
                        <div className="billboard__image">
                            <Skeleton height="100vh" />
                        </div>
                    </div>
                </LoadingSkeleton>
            )
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
                    <div className="billboard__links">
                        <button className="button button--primary button--medium button--has-icon" type="button">
                            <i className="fas fa-play"></i>
                            <span>Play</span>
                        </button>
                        <button className="button button--secondary button--medium button--has-icon" type="button">
                            <i className="fas fa-info-circle"></i>
                            <span>More Info</span>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    billboard: state.billboard.movie,
});

export default connect(mapStateToProps)(Billboard);
