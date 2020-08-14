import {GET_SMURFS, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS} from "./actions";


export const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
  initialized: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case GET_SMURFS:
    return {...state,
            isFetching: true,
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
    // return state if it is called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return state;
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
