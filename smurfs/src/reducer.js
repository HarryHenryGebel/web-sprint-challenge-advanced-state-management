import GET_SMURFS from "./actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case GET_SMURFS:
    return {...state,
            isFetching: true,
            error: null};
  default:
    // return state if it is called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return state;
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
