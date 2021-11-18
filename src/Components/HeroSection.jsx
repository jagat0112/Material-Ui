import React from "react";
import Hero from "../Assets/banner_eho2sg_c_scale_w_1532.png";
import { Typography, Fab, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroBanner: {
    fontSize: "100px",
    lineHeight: 1.1,
    fontWeight: "800",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
      lineHeight: 1.1,
      fontWeight: "800",
    },
  },
}));
const HeroSection = () => {
  const classes = useStyles();
  return (
    <Typography
      component="div"
      sx={{ backgroundColor: "black", color: "white" }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={4} p={4}>
          <Typography component="div">
            <Typography component="h1" className={classes.heroBanner} sx={{}}>
              Cloud Hosting for Pros
            </Typography>
            <Typography variant="subtitle1">
              Deploy your website in less than 60 seconds.
            </Typography>
            <Fab variant="extended" color="secondary">
              GET STARTED
            </Fab>
          </Typography>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Typography>
            <img className="hero-photo" src={Hero}></img>
          </Typography>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default HeroSection;
