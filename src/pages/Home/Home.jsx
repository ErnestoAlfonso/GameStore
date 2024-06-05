// import { useEffect, useState } from "react";
import { GameList } from "../../components/GameList/GameList";
import { useGame } from "../../hooks/useGameF";
import { Link } from "react-router-dom";

export const Home = () => {
    const [games] = useGame();
    // const [newgame, setNewGame] = useState([]);

    // function getGamesF(game) {
    //     const ng = [];
    //     for (let i = 0; i < game.length; i++) {
    //         ng.push({ id: i.toString(), name: game[i.toString()]['name'], image: game[i.toString()]['background_image'] });
    //     }
    //     return ng;
    // }

    // useEffect(() => {
    //     getGames();
    //     setNewGame(getGamesF(games));
    // }, [games]);

    return (
        <div className="homeContainer">
            {games === undefined ? <div>Loading...</div>: <ul className='gameList'>
            {games.map((game, index) => (
                <li className='elementList' key={game.id}>
                    <Link className='linkGame' to={`/game/${index}`}>{game.name}</Link>
                </li>
            ))}
        </ul>}
        </div>
    );
};


