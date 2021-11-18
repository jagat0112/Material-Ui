import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { lightBlue, blue } from "@mui/material/colors";

const CardItems = () => {
  return (
    <Grid container justifyContent="space-evenly" spacing={2}>
      <Grid item>
        <CardItem color={lightBlue} />
      </Grid>
      <Grid item>
        <CardItem color={blue} />
      </Grid>
      <Grid item>
        <CardItem color={lightBlue} />
      </Grid>
    </Grid>
  );
};

export default CardItems;
