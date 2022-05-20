import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/Like';

class Movies extends Component {

    state = {
        movies: getMovies()
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

    render() {
        const { length: count } = this.state.movies;

        if (count === 0) return <div class="alert alert-danger">
            <strong>Oops!</strong> There are no movies in the database.
        </div>

        return (
            <React.Fragment>
                <div className="alert alert-info">
                    Showing <strong>{count}</strong> movies in the database.
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
                                this.state.movies.map(movie =>
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
                                            <button onClick={() => this.handleDeleteMovie(movie)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    }
}

export default Movies;