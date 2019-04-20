import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';


const mapStateToProps = state => ({
	smurfs: state.smurfs
});


class SmurfList extends React.Component {
    constructor(props) {
        super(props);
        // initialize our smurf list
        this.props.getSmurfs();
    }

    render() {
        return (
            <ul className='smurf-list'>
            	{this.props.smurfs.map(smurf => (
    	            <li key={smurf.id}>
                        <Smurf {...smurf} />
    	            </li>
            	))}
            </ul>
        );
    }
};


export default connect( mapStateToProps, { getSmurfs } )(SmurfList);
