import React from "react";
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';

export default function Smurf(props) {
  const {smurf} = props;

  return (
    <Box m={1}>
      <Card variant="outlined">
        <Typography variant="h3">
          {smurf.name}
        </Typography>
        <p>
          <Typography component="span" style={{fontWeight: "bold",
                                               marginRight: "1rem"}}>
            Age:
          </Typography>
          <Typography component="span">
            {smurf.age}
          </Typography>
        </p>
        <p>
          <Typography component="span" style={{fontWeight: "bold",
                                               marginRight: "1rem"}}>
            Height:
          </Typography>
          <Typography component="span">
            {smurf.height}
          </Typography>
        </p>
      </Card>
    </Box>
  );
}
