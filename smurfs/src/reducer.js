export const initialState = {
  smurfs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  default:
    // return state if it is called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return state;
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
