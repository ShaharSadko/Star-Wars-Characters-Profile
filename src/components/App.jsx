import React from 'react';
import CharactersContainer from './Containers/CharactersContainer.jsx';
import CharacterProfileContainer from './Containers/CharacterProfileContainer.jsx';
import CharacterPlanetContainer from './Containers/CharacterPlanetContainer.jsx';

const App = ()=> {
    return (<div >
        <div>
            <CharactersContainer/>
            <CharacterProfileContainer/>
            <CharacterPlanetContainer/>
        </div>
    </div>)
};

export default App;