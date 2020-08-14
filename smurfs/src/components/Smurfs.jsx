import React from "react";
import {connect} from "react-redux";

import {getSmurfs} from "../actions";

function Smurfs (props) {
  const {error, getSmurfs, initialized, isFetching, smurfs} = props;
  debugger;

  if (!initialized) {
    getSmurfs();
  }

  if (initialized && !isFetching && !error)
    return (
      <>
        {smurfs.map(smurf => <div/>)}
      </>
    );
  else if (!error)
    return (
      <h2>
        Loading...
      </h2>);
  else
    return (
      <h2>
        Error: {`${error}`}
      </h2>
    );
}

function mapStateToProps (state) {
  return {
  error: state.error,
  initialized: state.initialized,
  isFetching: state.isFetching,
  smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs);
