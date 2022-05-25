import React, { Component } from 'react';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';
import Like from './common/Like';

class MoviesTable extends Component {

    columns = [
        {column: "title", name: "Name"}, 
        {column: "genre.name", name: "Genre"}, 
        {column: "numberInStock", name: "Stock"}, 
        {column: "dailyRentalRate", name: "Rate"}, 
        {key: "favorite"}, 
        {key: "action"}, 
    ];



    render() {
        const { movies, onLike, onDelete, onSort, sortColumn } = this.props
        return (
            <div className="table-responsive">
                <table className='table'>
                    <TableHeader 
                        columns={this.columns} 
                        sortColumn={sortColumn} 
                        onSort={onSort}
                    />

                    <TableBody 
                        data={movies} 
                        columns={this.columns}
                    />

                </table>
            </div>);
    }
}


export default MoviesTable;