const initialState = {
    games: []
}

export function gameReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_GAMES':
            return {
                ...state, games: action.games
            }
        case 'ADD_GAME':
            return { ...state, games: [action.game, ...state.games] }
        default:
            return state
    }
}