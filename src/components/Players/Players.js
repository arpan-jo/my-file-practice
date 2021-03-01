import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Country = props => {
    const { name, country, salary, image } = props.player;
    const handleAddButton = props.handleAddButton;

    const [isClicked, setIsClicked] = useState(true);

    return (
        <div class="d-inline-block rounded  m-3 bg-secondary shadow">
            <img className="images" src={image} alt="" />
            <span class="my-3">
                <p>Name: {name}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}</p>
                <button
                    disabled={!isClicked}
                    class="btn btn-success"
                    onClick={() => {
                        handleAddButton(props.player);
                        setIsClicked();
                    }}
                >
                    {isClicked
                        ? 'Add Player to Team '
                        : 'Alread y added to Team'}
                    <FontAwesomeIcon icon={faUsers} />
                </button>
            </span>
            <br />
        </div>
    );
};

export default Country;
