import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import NewSmurfForm from "./NewSmurfForm";
import Smurfs from "./Smurfs";

export default function App () {
  return (
    <Box m={1} mt={0}>
          <Typography variant="h1">
            Smurf Village Blue Pages
          </Typography>
          <Smurfs/>
          <NewSmurfForm/>
    </Box>
  );
}
