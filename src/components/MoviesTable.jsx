import React, { Component } from 'react';
import Like from './common/Like';

class MoviesTable extends Component {

    raiseSort = column => {
        const sortColumn = { ...this.props.sortColumn };

        if (sortColumn.column === column) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn.column = column;
            sortColumn.order = 'asc';
        }

        this.props.onSort(sortColumn);
    }

    render() {
        const { movies, onLike, onDelete } = this.props
        return (
            <div className="table-responsive">
                <table className='table'>
                    <thead>
                        <tr>
                            <th onClick={() => this.raiseSort('title')}>Name</th>
                            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
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
                                            onClick={() => onLike(movie)} />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => onDelete(movie)}
                                            className='btn btn-danger'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>);
    }
}


export default MoviesTable;