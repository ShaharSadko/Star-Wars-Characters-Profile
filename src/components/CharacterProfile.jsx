import React from  'react';

let CharacterProfile = ({profile})=>
    <div >
        <h1>Profile</h1>
    {profile.name && <p>Name: {profile.name}</p>}
    {profile.height && <p>Height: {profile.height}cm</p>}
    {profile.mass && <p>Weight: {profile.mass}kg</p>}
    {profile.gender && <p>Gender: {profile.gender}</p>}
    </div>;

export default CharacterProfile;