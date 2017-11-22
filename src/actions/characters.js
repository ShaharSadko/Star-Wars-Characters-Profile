import {API_URL} from '../Constants';
import {SET_SELECTED_CHARACTER_WORLD, SET_CHARACTERS, SET_SELECTED_CHARACTER} from '../Constants';
var myHeaders = new Headers();

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

export function setCharacters(characters) {
    return {type: SET_CHARACTERS, characters}
}

export function setSelectedCharacter(profile) {
    return {type: SET_SELECTED_CHARACTER, profile};
}

export function setCurrentCharacterWorld(world) {
    return {type: SET_SELECTED_CHARACTER_WORLD, world};
}

export function getCharacterProfile(id) {
    return dispatch=>fetch(`${API_URL}/people/${id}`).then(res=>res.json()).then(profile=> {
        dispatch(setSelectedCharacter(profile));
        dispatch(getCharacterPlanetInformation(profile.homeworld));
    });
}

export function getCharacterPlanetInformation(url) {
    return dispatch=> fetch(url).then(res=>res.json()).then(world=>dispatch(setCurrentCharacterWorld(world)))
}

export function getCharacters() {
    return dispatch=>fetch(`${API_URL}/people/`, myInit)
        .then(res=>res.json())
        .then(data=> {
                dispatch(setCharacters(data.results))
            }
        )
        ;
}
