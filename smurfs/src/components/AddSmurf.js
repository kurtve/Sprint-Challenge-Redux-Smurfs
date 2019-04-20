import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';


class AddSmurf extends React.Component {

	state = { name: '', age: '', height: '' };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleClick = (e) => {
		e.preventDefault();
		this.setState({ name: '', age: '', height: '' });
		this.props.addSmurf({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        });
	};

    render() {
        return (
        	<form className='add-smurf'>
                <h3>Add a New Smurf:</h3>
                <input type='text' name='name' value={this.state.name}
                	onChange={this.handleChange} placeholder='Name' />
                <input type='text' name='age' value={this.state.age}
                    onChange={this.handleChange} placeholder='Age' />
                <input type='text' name='height' value={this.state.height}
                    onChange={this.handleChange} placeholder='Height' />
                <button onClick={this.handleClick}>Add Smurf</button>
            </form>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);
