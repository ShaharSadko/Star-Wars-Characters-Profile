import React from 'react'
import {connect} from 'react-redux';
import CharactersList from '../CharactersList..jsx';
import {getCharacterProfile} from '../../actions/characters';

let mapStateToProps = ({characters})=> {
    return {characters};
};

let mapDispatchToProps = dispatch => ({
    setCharacter(id){
        return ()=> dispatch(getCharacterProfile(id))
    }
});
const CharactersContainer = connect(mapStateToProps,mapDispatchToProps)(CharactersList);

export default CharactersContainer;