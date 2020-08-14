import requester from "easier-requests";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";

export function addSmurf(smurf) {
  return function (dispatch) {
    async function _addSmurf() {
      try {
        const id = requester.createUniqueID();
        await requester.post("http://localhost:3333/smurfs", id, smurf);
        debugger;
        // dispatch({type: ADD_SMURF_SUCCESS,
        //           smurf: requester.response(id).data});
      }
      catch (error) {
        console.log(error);
        dispatch({type: ADD_SMURF_FAILURE, error: error});
      }
    }
    dispatch({type: ADD_SMURF});
    _addSmurf();
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
