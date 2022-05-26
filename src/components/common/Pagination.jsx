import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ totalItems, perPage, currentPage, onPageChange }) => {

    const paginateLinks = Math.ceil(totalItems / perPage);

    if (paginateLinks === 1) return null;

    const pages = _.range(1, paginateLinks + 1);

    return (<nav>
        <ul className="pagination">
            {pages.map(page => <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                <a
                    onClick={() => onPageChange(page)}
                    className="page-link">{page}</a>
            </li>)}

        </ul>
    </nav>);
}

Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;