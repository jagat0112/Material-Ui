import React from "react";
import { Card, CardContent, Typography, Fab, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const CardItem = ({ color }) => {
  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardContent style={{ padding: 0, minWidth: "300px" }}>
        <Typography
          component="div"
          sx={{
            backgroundColor: color[300],
            color: "white",
            padding: "10px",
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "20px" }}>
            Entry
          </Typography>
          <Typography sx={{ fontSize: 50 }} display="inline">
            $14
          </Typography>
          <Typography display="inline">/month</Typography>
          <Fab
            variant="extended"
            size="small"
            sx={{
              margin: "0 20px",
              backgroundColor: color[400],
              boxShadow: "none",
              fontSize: "10px",
              color: "white",
            }}
          >
            10% off
          </Fab>
          <Typography>Easy start on the cloud</Typography>
        </Typography>
        <Typography component="div" sx={{ padding: "0 10px" }}>
          <Typography>
            <DoneIcon
              fontSize="small"
              color="success"
              sx={{ paddingTop: "10px" }}
            />{" "}
            Unlimited Bandwidth
          </Typography>
          <Typography>
            <DoneIcon
              fontSize="small"
              color="success"
              sx={{ paddingTop: "10px" }}
            />{" "}
            Unlimited Websites
          </Typography>
          <Typography>
            <DoneIcon
              fontSize="small"
              color="success"
              sx={{ paddingTop: "10px" }}
            />{" "}
            100 GB SSD Storage
          </Typography>
          <Typography>
            <DoneIcon
              fontSize="small"
              color="success"
              sx={{ paddingTop: "10px" }}
            />{" "}
            3 GB RAM
          </Typography>
        </Typography>
        <Typography component="div">
          <Button variant="outlined" sx={{ width: "95%", m: 1 }}>
            BUY NOW
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
