import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/Like';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { paginate } from '../utils/paginate';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        selectedGenre: null,
        perPage: 3,
        currentPage: 1
    }

    componentDidMount() {
        const genres = [{name: "All Genres"}, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDeleteMovie = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const i = movies.indexOf(movie);

        movies[i] = { ...movies[i] };
        movies[i].liked = !movies[i].liked;

        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleSelectedGenre = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    render() {
        const { length: count } = this.state.movies;
        const { perPage, currentPage, movies: allMovies, genres, selectedGenre } = this.state;

        if (count === 0) return <div className="alert alert-danger">
            <strong>Oops!</strong> There are no movies in the database.
        </div>

        const filteredMovies = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => selectedGenre._id === movie.genre._id) 
            : allMovies;

        const movies = paginate(filteredMovies, currentPage, perPage);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedItem={selectedGenre}
                        onSelectItem={this.handleSelectedGenre}
                    />
                </div>
                <div className="col">
                    <div className="alert alert-info">
                        Showing <strong>{filteredMovies.length}</strong> movies in the database.
                    </div>
                    <div className="table-responsive">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th className='text-center'>Favorite</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map(movie =>
                                        <tr key={movie._id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td className='text-center'>
                                                <Like
                                                    isLiked={movie.liked}
                                                    onClick={() => this.handleLike(movie)} />
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => this.handleDeleteMovie(movie)}
                                                    className='btn btn-danger'>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        totalItems={filteredMovies.length}
                        perPage={perPage}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }
}

export default Movies;