import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import {connect} from 'react-redux';

export const Movies = React.createClass({
    render: function() {
        return <div className="moviesContainer">
            {this.props.movies.map(movie =>
                <Movie key={movie.name} {...movie}></Movie>
            )}
        </div>;

    }
});

function mapStateToProps (state) {
    return {
        movies: state.get("movies")
    };
}

export const MovieContainer = connect(
    mapStateToProps
)(Movies)
