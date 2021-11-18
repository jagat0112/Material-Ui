import React from "react";
import { indigo } from "@mui/material/colors";
import {
  Button,
  Fab,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import Easy from "../Assets/easy.jpeg";
import Fast from "../Assets/fast.jpeg";
import WordPress from "../Assets/wordpress.jpeg";
import { makeStyles } from "@material-ui/core";

const createStyle = makeStyles((theme) => ({
  featuresGrid: {
    alignItems: "center",
    justifyContent: "spaceAround",
    textAlign: "left",
  },
  featuresTitle: {
    fontSize: "40px",
    fontWeight: "800",
    color: indigo[900],
    textAlign: "center",
  },
}));
const Features = () => {
  const classes = createStyle();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Typography
      component="div"
      sx={{
        textAlign: "center",
      }}
    >
      <Typography component="div" sx={{ p: "80px 0 40px 0" }}>
        <Typography component="h3" className={classes.featuresTitle} sx={{}}>
          Host Оn Тhe Cloud to Keep Growing
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, illo.
        </Typography>
      </Typography>
      <Grid container className={classes.featuresGrid} spacing={5}>
        <Grid item xs={12} sm={6}>
          <Fab
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <ComputerIcon color="primary" />
          </Fab>
          <Typography variant="h6">Super Easy to Use</Typography>
          <Typography sx={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            pariatur ducimus, molestias ullam fuga minus exercitationem vitae
            ipsam.
          </Typography>
          <Button color="secondary" sx={{ mt: 2 }} variant="contained">
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Easy} style={{ maxWidth: "100%" }}></img>
        </Grid>
      </Grid>
      {/* SECOND GRID */}
      <Grid
        container
        className={classes.featuresGrid}
        spacing={5}
        sx={{
          marginTop: "80px",
        }}
      >
        {" "}
        <Grid item xs={12} sm={6} order={isMatch ? 2 : 1}>
          <img src={Fast} style={{ maxWidth: "100%" }}></img>
        </Grid>
        <Grid item xs={12} sm={6} order={isMatch ? 1 : 2}>
          <Fab
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <ComputerIcon color="primary" />
          </Fab>
          <Typography variant="h6">Super Easy to Use</Typography>
          <Typography sx={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            pariatur ducimus, molestias ullam fuga minus exercitationem vitae
            ipsam.
          </Typography>
          <Button color="secondary" sx={{ mt: 2 }} variant="contained">
            Learn More
          </Button>
        </Grid>
      </Grid>
      {/* THIRD GRID */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        textAlign="left"
        spacing={5}
        sx={{
          marginTop: "80px",
        }}
        className={classes.featuresGrid}
      >
        {" "}
        <Grid item xs={12} sm={6}>
          <Fab
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <ComputerIcon color="primary" />
          </Fab>
          <Typography variant="h6">Super Easy to Use</Typography>
          <Typography sx={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            pariatur ducimus, molestias ullam fuga minus exercitationem vitae
            ipsam.
          </Typography>
          <Button color="secondary" sx={{ mt: 2 }} variant="contained">
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={WordPress} style={{ maxWidth: "100%" }}></img>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default Features;
