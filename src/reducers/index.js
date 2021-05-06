import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import counterReducer from './counter';
import statsReducer from './stats';

const combinedReducers = combineReducers({
    totalXp: statsReducer,
    counter: counterReducer,
    isLogged: loggedReducer
});

export default combinedReducers;