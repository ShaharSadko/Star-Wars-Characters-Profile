import React from 'react';
import Character from './Character.jsx';

const CharactersList = ({setCharacter,characters}) => {
    let charactersElements = characters.map((character, i)=><Character key={i} onClick={setCharacter(i+1)}
                                                                       character={character}/>);
    return <div>
        <h1>Characters List</h1>
        {charactersElements}
    </div>;
};

export default CharactersList;