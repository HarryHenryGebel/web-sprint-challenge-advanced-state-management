import requester from "easier-requests";

export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";

export function addSmurfs(smurf) {
  return function (dispatch) {
    async function _addSmurfs() {
      try {
        const id = requester.createUniqueID();
        await requester.post("http://localhost:3333/smurfs", id, smurf);
        debugger;
        // dispatch({type: ADD_SMURFS_SUCCESS,
        //           smurf: requester.response(id).data});
      }
      catch (error) {
        console.log(error);
        dispatch({type: ADD_SMURFS_FAILURE, error: error});
      }
    }
    dispatch({type: ADD_SMURFS});
    _addSmurfs();
  };
}

export function getSmurfs() {
  return function (dispatch) {
    async function _getSmurfs() {
      try {
        const id = requester.createUniqueID();
        await requester.get("http://localhost:3333/smurfs", id);
        dispatch({type: GET_SMURFS_SUCCESS,
                  smurfs: requester.response(id).data});
      }
      catch (error) {
        console.log(error);
        dispatch({type: GET_SMURFS_FAILURE, error: error});
      }
    }
    dispatch({type: GET_SMURFS});
    _getSmurfs();
  };
}
