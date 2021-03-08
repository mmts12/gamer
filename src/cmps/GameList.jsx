import React from 'react'
import { GamePreview } from './GamePreview';

export function GameList({ games,addGame }) {


    return (
        <section className="games-container">
            {games && games.map((game) => {
                return <GamePreview addGame={addGame} key={game.id} game={game} />
            })}
        </section>
    )
}
