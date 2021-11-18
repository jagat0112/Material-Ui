import React from "react";
import { indigo } from "@mui/material/colors";
import Customer from "../Assets/testimonial.jpeg";
import RemoveIcon from "@mui/icons-material/Remove";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  testimonialsFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  testimonialImg: {
    padding: "20px",
    maxWidth: "50%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  customerComment: {
    fontSize: "20px",
    lineHeight: "1",
    fontStyle: "italic",
    padding: " 0",
    textAlign: "left",
    margin: "20px 0",
    color: "gray",
  },
}));
const Customers = () => {
  const classes = useStyles();
  return (
    <Typography
      component="div"
      sx={{
        textAlign: "center",
        padding: "40px 0",
      }}
    >
      <Typography
        variant="p"
        mt={5}
        sx={{
          fontWeight: "800",
          fontSize: "40px",
          color: indigo[900],
          marginBottom: "2px",
          textAlign: "center",
        }}
      >
        What our Customer are Saying
      </Typography>
      <Typography variant="subtitle1" style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        provident quae corrupti praesentium.
      </Typography>
      <Card sx={{ width: "80%", margin: "20px auto" }}>
        <Box className={classes.testimonialsFlex}>
          <CardMedia
            component="img"
            image={Customer}
            className={classes.testimonialImg}
          ></CardMedia>
          <CardContent>
            <Typography variant="body1" className={classes.customerComment}>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.&quot;
            </Typography>
            <Box display="flex" justifyContent="left" alignItems="center">
              <RemoveIcon display="inline" />
              <Typography
                display="inline"
                sx={{ fontWeight: "600px", fontSize: "20px" }}
                color="primary"
              >
                Jhone Lumeo
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Typography>
  );
};

export default Customers;
