import requester from "easier-requests";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

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
