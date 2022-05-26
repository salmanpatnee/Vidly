import React, { Component } from 'react';

class TableHeader extends Component {

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

    renderSortIcon = column => {
        const sortColumn = { ...this.props.sortColumn };

        if (column.column !== sortColumn.column) return null;

        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>

        return <i className="fa fa-sort-desc"></i>

    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => <th
                        className='clickable'
                        key={column.column || column.key}
                        onClick={() => this.raiseSort(column.column)}>
                        {column.name} {this.renderSortIcon(column)}
                    </th>)}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;