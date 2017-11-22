import React from 'react';
import  {connect} from 'react-redux';
import CharacterPlanet from '../CharacterPlanet.jsx';

let mapStateToProps = ({world})=>({world});
export default connect(mapStateToProps)(CharacterPlanet);