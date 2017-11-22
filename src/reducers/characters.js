import {SET_CHARACTERS, SET_SELECTED_CHARACTER,SET_SELECTED_CHARACTER_WORLD} from '../Constants';

export let charactersReducer = (state = [], action)=> {
    switch (action.type) {
        case SET_CHARACTERS:
            return action.characters;

        default :
            return state;
    }
};

export let characterWorldReducer = (state=[] , action) =>{
    switch (action.type){
        case SET_SELECTED_CHARACTER_WORLD:
            return action.world;
        default:
            return state
    }
};

export let charactersProfileReducer = (state = [], action)=> {
    switch (action.type) {
        case SET_SELECTED_CHARACTER:
            return action.profile;
        default:
            return state;
    }
};

