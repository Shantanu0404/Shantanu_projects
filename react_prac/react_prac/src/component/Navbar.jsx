import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a> {/* Use "/" instead of "#" */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="form">
                                    Form
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="counter">
                                    Counter
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="button">
                                    Buttons
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="card">
                                    Card
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard">
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
