import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
	smurfs: state.smurfs
});


const SmurfList = (props) => {

    return (
        <ul className='smurf-list'>
        	{props.smurfs.map(smurf => (
	            <li key={smurf.id} className='smurf'>
	            	{smurf.name}
	            </li>
        	))}
        </ul>
    );
};


export default connect( mapStateToProps, {} )(SmurfList);
