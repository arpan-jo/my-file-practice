import React from 'react';

const Team = props => {
    const team = props.team;

    const totalSalary = team.reduce((acc, crnt) => acc + crnt.salary, 0);

    return (
        <div class="bg-info mt-5 p-3 rounded">
            <h1>Team</h1>
            <p>
                <small>Players Added: {team.length}</small>
            </p>
            <p>
                <small>Total Salary: $ {totalSalary}</small>
            </p>
        </div>
    );
};

export default Team;
