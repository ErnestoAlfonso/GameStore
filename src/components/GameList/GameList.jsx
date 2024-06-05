import { Link } from 'react-router-dom';
import './GameList.css' 


export const GameList = (games) => {
    return (
        <ul className='gameList'>
            {games.map((game) => (
                <li className='elementList' key={game.id}>
                    <Link className='linkGame' to={`/game/${game.id}`}>{game.name}</Link>
                </li>
            ))}
        </ul>
    );
};
