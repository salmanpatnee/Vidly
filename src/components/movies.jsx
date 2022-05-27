import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        sortColumn: { column: "title", order: "asc" },
        selectedGenre: null,
        perPage: 4,
        currentPage: 1
    }

    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDeleteMovie = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLike = movie => {
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

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPagedData = () => {

        const { perPage, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

        const filteredMovies = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => selectedGenre._id === movie.genre._id)
            : allMovies;

        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.column], [sortColumn.order]);

        const movies = paginate(sortedMovies, currentPage, perPage);

        return { data: movies, totalCount: filteredMovies.length };
    }

    render() {
        const { length: count } = this.state.movies;
        const { perPage, currentPage, genres, selectedGenre, sortColumn } = this.state;

        if (count === 0) return <div className="alert alert-danger">
            <strong>Oops!</strong> There are no movies in the database.
        </div>

        const { data: movies, totalCount } = this.getPagedData();

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
                        Showing <strong>{totalCount}</strong> movies in the database.
                    </div>

                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDeleteMovie}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        totalItems={totalCount}
                        perPage={perPage}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }
}

export default Movies;