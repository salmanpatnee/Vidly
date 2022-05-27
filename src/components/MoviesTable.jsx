import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/Table';
import Like from './common/Like';

class MoviesTable extends Component {

    columns = [
        { column: "title", name: "Name", content: movie => (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>) },
        { column: "genre.name", name: "Genre" },
        { column: "numberInStock", name: "Stock" },
        { column: "dailyRentalRate", name: "Rate" },
        { key: "favorite", content: movie => (<Like isLiked={movie.liked} onClick={() => this.props.onLike(movie)} />) },
        { key: "action", content: movie => (<button onClick={() => this.props.onDelete(movie)} className='btn btn-danger'>Delete </button>) },
    ];

    render() {
        const { movies, onSort, sortColumn } = this.props
        return (<Table
            data={movies}
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort} />);
    }
}


export default MoviesTable;