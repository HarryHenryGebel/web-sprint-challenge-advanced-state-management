import {ADD_SMURF,
        ADD_SMURF_FAILURE,
        ADD_SMURF_SUCCESS,
        GET_SMURFS,
        GET_SMURFS_FAILURE,
        GET_SMURFS_SUCCESS} from "./actions";


export const initialState = {
  getError: null,
  initialized: false,
  isFetching: false,
  isPosting: false,
  postError: null,
  smurfs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case ADD_SMURF:
    return {...state,
            isPosting: true,
            postError: null};
  case ADD_SMURF_FAILURE:
    return {...state,
            isPosting: false,
            postError: action.error};
  case ADD_SMURF_SUCCESS:
    return {...state,
            isPosting: false};
  case GET_SMURFS:
    return {...state,
            isFetching: true,
            initialized: true,
            getError: null};
  case GET_SMURFS_FAILURE:
    return {...state,
            isFetching: false,
            getError: action.error};
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
