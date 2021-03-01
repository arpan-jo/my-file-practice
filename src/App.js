import './App.css';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import Header from './components/Header/Header';

function App() {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/556fdecf')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(error => console.log(error));
    }, []);

    const handleAddButton = player => {
        const newSelected = [...selectedPlayer, player];
        setSelectedPlayer(newSelected);
    };

    return (
        <div>
            <Header />
            <div class="container text-light">
                <div className="App" class="row d-flex">
                    <div class="col-9">
                        <h4 class="text-dark">
                            Total Players: {players.length}
                        </h4>
                        {players.map(player => (
                            <Players
                                player={player}
                                key={player.id}
                                handleAddButton={handleAddButton}
                            ></Players>
                        ))}
                    </div>
                    <div class="col-3">
                        <Team team={selectedPlayer}></Team>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
