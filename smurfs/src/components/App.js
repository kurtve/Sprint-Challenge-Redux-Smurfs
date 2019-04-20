import React from 'react';

import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
import './App.css';


export default () => {
    return (
        <div className="App">
            <h1>Redux Smurfs!</h1>
            <AddSmurf />
            <SmurfList />
        </div>
    );
};
