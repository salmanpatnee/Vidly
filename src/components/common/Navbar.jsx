import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Vidly</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/customers">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-0">
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-success btn-sm text-light mr-2" to="/register">
                                <i className="fa fa-sign-in" aria-hidden="true"></i> Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-info btn-sm text-light" to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;