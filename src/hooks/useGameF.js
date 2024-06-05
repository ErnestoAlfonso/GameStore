import { useContext, useEffect } from "react";
import { GameContext } from '../context/gameContext.jsx';

export const useGame = () => {
    const { games, setGames } = useContext(GameContext);

    const getGames = () => {
        fetch("https://api.rawg.io/api/games?key=aa53126c957440969f34fab97b516774")
            .then((res) => res.json())
            .then((data) => setGames(data.results.map((game) => game)));
    };

    useEffect(() => {
        getGames();
    }, []);

    return [games, getGames, setGames];
};

