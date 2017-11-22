import React from 'react';

let CharacterPlanet = ({world})=>
    <div >
        <h1>World</h1>
        {world.name && <p>Name: {world.name}</p>}
        { world.population && <p>Population: {world.population}</p>}
        {world.diameter && <p>Diameter: {world.diameter}km</p>}
        {world.rotation_period && <p>Day length: {world.rotation_period} hours</p>}
        {world.orbital_period && <p>Year length: {world.orbital_period} days</p>}
        {world.climate && <p>Climate: {world.climate}</p>}
    </div>;


export default CharacterPlanet;