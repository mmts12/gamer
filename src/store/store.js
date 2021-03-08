import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { userReducer } from './reducers/userReducer.js';
import { gameReducer } from './reducers/gameReducer';

const rootReducer = combineReducers({
    userModule: userReducer,
    gameModule: gameReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
