import {combineReducers} from 'redux';
import {charactersReducer as characters,charactersProfileReducer as profile , characterWorldReducer as world} from './characters';
var reducer = combineReducers({characters, profile,world});

export default reducer;
