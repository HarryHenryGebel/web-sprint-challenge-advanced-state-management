import requester from "easier-requests";

export const GET_SMURFS = "GET_SMURFS";

export function getSmurfs() {
  return function (dispatch) {
    async function _getSmurfs() {
      try {
        const id = requester.createUniqueID();
        await requester.get("http://localhost:3333/smurfs", id);
        console.log(requester.response(id));
      }
      catch (error) {
        console.log(error);
        throw error;
      }
    }
    dispatch({type: GET_SMURFS});
    _getSmurfs();
  };
}
