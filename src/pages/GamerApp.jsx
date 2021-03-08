import React, { useState, useEffect } from 'react';
import { gameService } from './../services/gameService';
import { Search } from './../cmps/Search';
import { GameList } from './../cmps/GameList';
import { useDispatch } from 'react-redux'
import { add } from './../store/actions/gameActions';



export function GamerApp() {
    const [games, setGames] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    const searchGames = async (term) => {
        const gamesQuery = await gameService.searchGames(term)
        setGames(gamesQuery);
    }

    const addGame = (gameToAdd)=>{
        gameToAdd.reviews = []
        dispatch(add(gameToAdd))
    }
    
    console.log(games)
    return (
        <section className="games-app main-layout">
            <h1 className="main-header">חפש את המשחק האהוב עליך</h1>
            <Search searchGames={searchGames} />
            <GameList addGame={addGame} games={games} />
        </section>
    )
}
