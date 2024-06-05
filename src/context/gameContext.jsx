import { createContext, useState } from "react";


export const GameContext = createContext({
    games: [],
    setGames: () => { },
});

export function GameProvider({children}) {
    const [games, setGames] = useState();


    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    );
}
