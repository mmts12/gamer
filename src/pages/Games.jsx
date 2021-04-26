import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { gameService } from '../services/gameService'

export function Games() {
    const gamesFromState = useSelector(state => state.gameModule.games)

    // useEffect(() => {
    //    const gamesDetails = gamesFromState.map((game)=> gameService.getGameDetailsById(game.id))
    //    console.log(gamesDetails)
    // }, [])

    
    return (
        <section>
            
        </section>
    )
}
