import { useParams } from 'react-router-dom';
import { ImageContainerComponent } from '../../models/ImageContainer';
import './Game.css'
import { useContext } from 'react';
import { GameContext } from '../../context/gameContext';

export const Game = () => {
    const { gameId } = useParams();
    const {games} = useContext(GameContext);


    return (
        <div className='gameContainer'>
            <section className='gameSection'>
                <image>
                    <ImageContainerComponent imageUrl={games[gameId]['background_image']} alt={`Imagen del juego ${games[gameId]}`} />
                </image>
                <div className='gameInfo'>
                    <h1>{games[gameId]['name']}</h1>
                    <section>
                        <text> Released: {games[gameId]['released']}, Rating: {games[gameId]['rating']}</text>
                    </section>
                    <button>
                        Buy Now
                    </button>
                </div>
            </section>
            <section className='gameReview'>
                <h2>More Details</h2>
                <text>
                    {games[gameId]['platforms'][0]['platform']['name']}
                </text>
                <h2>Reviews</h2>
                <text>
                    Aquí va el texto de la reviews
                </text>
            </section>
        </div>
    );
};
