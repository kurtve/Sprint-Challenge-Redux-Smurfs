import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';


const Smurf = props => {

    const handleClick = (e) => {
        e.preventDefault();
        props.deleteSmurf(props.id);
    };

    return (
	    <div className='smurf'>
           	<h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <button onClick={handleClick}>Delete</button>
	    </div>
    );
};


export default connect( null, { deleteSmurf } )(Smurf);
