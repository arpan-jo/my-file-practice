import React from 'react';

const Team = props => {
    const team = props.team;
    console.log(team);

    const totalSalary = team.reduce((acc, crnt) => acc + crnt.salary, 0);

    return (
        <div class="bg-success mt-5 p-3 rounded">
            <h1>My Team</h1>
            <p>
                <small>Players Added: {team.length}</small>
            </p>
            <p>
                <small>Total Salary: $ {totalSalary}</small>
            </p>
            <ol>
                {team.map(player => (
                    <li key={player.id}>
                        {player.name}, ${player.salary}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Team;
