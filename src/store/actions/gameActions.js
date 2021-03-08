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