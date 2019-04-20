import { ADD_SMURF_START } from '../action';
import { ADD_SMURF_SUCCESS } from '../actions';
import { ADD_SMURF_FAIL } from '../actions';

import { GET_SMURFS_START } from '../actions';
import { GET_SMURFS_SUCCESS } from '../actions';
import { GET_SMURFS_FAIL } from '../actions';

import { UPDATE_SMURF_START } from '../actions';
import { UPDATE_SMURF_SUCCESS } from '../actions';
import { UPDATE_SMURF_FAIL } from '../actions';

import { DELETE_SMURF_START } from '../actions';
import { DELETE_SMURF_SUCCESS } from '../actions';
import { DELETE_SMURF_FAIL } from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 };


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };

    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };

    case GET_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };




    default:
      return state;
  }

};
