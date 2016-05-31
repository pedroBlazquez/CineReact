import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import {List,fromJS} from 'immutable'
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';
import {Grid,Col,Row} from 'react-bootstrap'

export const Movies = React.createClass({
    addToCart: function (movie) {
        return  () => {
            this.props.setCart(movie);
        };
    },
    removeFromCart: function (movie) {
        return () => {
            this.props.removeItemFromCart(movie);
        };
    },
    isMovieOnCart: function (movie) {
        let isOnCart = false;
        if(this.props.cart) {
            isOnCart = this.props.cart.includes(fromJS(movie));
        }
        return isOnCart;
    },
    render: function() {
        return <div className="moviesContainer">
            <Grid>
                <Row>
                {this.props.movies.map(movie =>
                    <Col xs={6} md={2}>
                        <Movie key={movie.name} {...movie} btnText={this.isMovieOnCart(movie) ? 'Remove' : 'Add'}
                            cartAction={this.isMovieOnCart(movie) ? this.removeFromCart(movie) : this.addToCart(movie)}></Movie>
                    </Col>
                )}
                </Row>
            </Grid>
        </div>;
    }
});

function mapStateToProps (state) {
    return {
        movies: state.get('movies'),
        cart: state.get('cart')
    };
}

export const MovieContainer = connect(
    mapStateToProps,
    actions
)(Movies)
