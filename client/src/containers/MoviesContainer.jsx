import React from 'react';
import {Map,List} from 'immutable'
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';
import {Grid,Col,Row} from 'react-bootstrap'
import Movie from '../components/movie/Movie.jsx';
import Search from '../components/Search/Search.jsx'

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
            isOnCart = this.props.cart.includes(movie);
        }
        return isOnCart;
    },
    getMovies: function () {
        return this.props.filteredMovies || this.props.movies
    },
    searchFilter: function () {
        const movies = this.props.movies;

            return (e) => {
                let filteredMovies = movies.filter(movie =>
                    (
                        movie.get('name').toUpperCase().includes(e.target.value.toUpperCase().trim()) ||
                        movie.get('description').toUpperCase().includes(e.target.value.toUpperCase().trim())
                    )
                );
                this.props.filterMovies(filteredMovies);
            }
    },
    render: function() {
        return <div className="moviesContainer">
            <Grid>
                <Search handleSearch={this.searchFilter()}></Search>
                <Row>
                {this.getMovies().map(movie =>
                    <Col xs={6} md={2}>
                        <Movie key={movie.get('name')}
                            name={movie.get('name')}
                            imgUrl={movie.get('imgUrl')}
                            description={movie.get('description')}
                            price={movie.get('price')}
                            btnText={this.isMovieOnCart(movie) ? 'Remove' : 'Add'}
                            cartAction={this.isMovieOnCart(movie) ? this.removeFromCart(movie) : this.addToCart(movie)}>
                        </Movie>
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
        cart: state.get('cart'),
        filteredMovies: state.get('filteredMovies')
    };
}

export const MovieContainer = connect(
    mapStateToProps,
    actions
)(Movies)
