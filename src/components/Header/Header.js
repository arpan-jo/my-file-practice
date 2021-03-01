import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div class="text-dark mb-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href>
                        Dream11
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href>
                                    Players
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href>
                                    Team
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <h1 class="text-warning text-lg-center">
                <FontAwesomeIcon icon={faFutbol} />
                <FontAwesomeIcon icon={faFutbol} />
                <FontAwesomeIcon icon={faFutbol} />
                <FontAwesomeIcon icon={faFutbol} />
                <br />
                <span>Dream League Soccer</span>
            </h1>
        </div>
    );
};

export default Header;
