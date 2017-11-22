import React from 'react';

let Character = ({character,onClick})=> {
    return <li onClick={onClick}>{character.name}</li>
};

export default Character;