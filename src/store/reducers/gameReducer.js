const initialState = {
    games:[]
}

export function gameReducer(state = initialState, action = {}) {
    console.log(action)
    switch (action.type) {
        case 'ADD_GAME':
            return { ...state,games:[action.game,...state.games] }
        default:
            return state
    }
}