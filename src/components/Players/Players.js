import React, { useState } from 'react';

import './Player.css';

const Country = props => {
    const { name, country, salary, image } = props.player;
    const handleAddButton = props.handleAddButton;

    return (
        <div class="d-inline-block rounded  m-3 bg-secondary shadow">
            <img className="images" src={image} alt="" />
            <span class="my-3">
                <p>Name: {name}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}</p>
                <button
                    class="btn btn-info"
                    onClick={() => {
                        handleAddButton(props.player);
                    }}
                >
                    Add Player to Team
                </button>
            </span>
            <br />
        </div>
    );
};

export default Country;
