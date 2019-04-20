import React from 'react';
import { connect } from 'react-redux';

// if we have time for stretch:
// import { deleteSmurf } from '../actions';


const Smurf = props => {

    return (
	    <div className='smurf'>
           	<h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
	    </div>
    );
};


export default connect( null, { } )(Smurf);
