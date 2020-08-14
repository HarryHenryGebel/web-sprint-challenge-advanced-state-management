import {ADD_SMURF,
        ADD_SMURF_FAILURE,
        ADD_SMURF_SUCCESS,
        GET_SMURFS,
        GET_SMURFS_FAILURE,
        GET_SMURFS_SUCCESS} from "./actions";


export const initialState = {
  error: null,
  initialized: false,
  isFetching: false,
  smurfs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case ADD_SMURF:
    return {...state,
            isFetching: true,
            error: null};
  case ADD_SMURF_FAILURE:
    return {...state,
            isFetching: false,
            error: action.error};
  case ADD_SMURF_SUCCESS:
    return {...state,
            isFetching: false,
            smurfs: [...state.smurfs, action.smurf]};
  case GET_SMURFS:
    return {...state,
            isFetching: true,
            initialized: true,
            error: null};
  case GET_SMURFS_FAILURE:
    return {...state,
            isFetching: false,
            error: action.error};
  case GET_SMURFS_SUCCESS:
    return {...state,
            isFetching: false,
            smurfs: action.smurfs};
  default:
    // return state if called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return state;
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
