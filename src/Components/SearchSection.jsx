import React from "react";
import { IconButton, TextField, Typography, Grid, Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { indigo } from "@mui/material/colors";

const SearchSection = () => {
  return (
    <Typography component="div" sx={{ textAlign: "center", margin: "20px 0" }}>
      <Typography sx={{ p: "40px" }}>
        <Typography
          variant="p"
          sx={{
            display: "block",
            fontSize: "40px",
            fontWeight: "800",
            color: indigo[900],
            lineHeight: "1",
            mt: "20px",
          }}
        >
          The best web hosting Starting at per month
        </Typography>
        <Typography variant="p" color="gray" style={{ padding: "10px 20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          cupiditate. Atque non quisquam quaerat perspiciatis consequatur,
          dolore modi id nobis asperiores eius?
        </Typography>
      </Typography>
      <form autoCapitalize="off" style={{ margin: "30px 0" }}>
        <TextField label="Type Something" variant="standard" />
        <br />
        <IconButton color="primary">
          <SearchIcon />
          Search
        </IconButton>
      </form>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item className="span">
          .com $9.26
        </Grid>
        <Grid item className="span">
          <Fab variant="extended" size="small" color="primary">
            .com $9.26
          </Fab>
        </Grid>
        <Grid item className="span">
          .com $9.26
        </Grid>
        <Grid item className="span">
          .com $9.26
        </Grid>
      </Grid>
    </Typography>
  );
};

export default SearchSection;
