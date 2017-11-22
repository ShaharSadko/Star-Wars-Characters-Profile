import React from 'react';
import {connect} from 'react-redux';
import CharacterProfile from '../CharacterProfile.jsx';

let mapStateToProps = ({profile})=> {
    return ({profile})
};
export default connect(mapStateToProps)(CharacterProfile);