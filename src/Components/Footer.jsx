import { Grid, Typography, makeStyles } from "@material-ui/core";
import Logo from "../Assets/logo-footer.png";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footerGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
      paddingLeft: "60px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography
      component="div"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        className={classes.footerGrid}
      >
        <Grid item>
          <img src={Logo}></img>
        </Grid>
        <Grid item>
          <Typography>PRODUCTS</Typography>
          <ul>
            <li>WordPress Hosting</li>
            <li>Free Automated WordPress</li>
            <li>Migrations</li>
          </ul>
        </Grid>
        <Grid item>
          <Typography>SUPPORT</Typography>
          <ul>
            <li>About</li>
            <li>Afiliates</li>
            <li>Blogs</li>
          </ul>
        </Grid>{" "}
        <Grid item>
          <Typography>DOMAIN</Typography>
          <ul>
            <li>Domain Checker</li>
            <li>Domain Transfer</li>
            <li>Free Domain</li>
          </ul>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default Footer;
