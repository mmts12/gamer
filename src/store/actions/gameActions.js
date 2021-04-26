import { gameService } from './../../services/gameService';

export function add(game) {
    return async dispatch => {
        try {
            await gameService.add(game)
            dispatch({ type: 'ADD_GAME', game })
        } catch (err) {
            console.log('error with adding game', err)
        }
    }
}

export function loadGames (games){
    console.log(games)
    return async dispatch => {
        try{
            dispatch({type:'LOAD_GAMES',games})
        }
        catch(err){
            console.log('err with load games from firebase')
        }
    }
}
