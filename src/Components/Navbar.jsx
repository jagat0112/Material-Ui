import React, { useState } from "react";
import logo from "../Assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [openNav, setOpenNav] = useState("false");
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item alignSelf="flex-start">
            <img src={logo}></img>
          </Grid>
          <Grid item>
            {isMatch ? (
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuIcon
                        color="error"
                        onClick={() => {
                          openNav ? setOpenNav(false) : setOpenNav(true);
                        }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                {openNav && (
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="VPS"></ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Domain"></ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Pricing"></ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                )}
              </List>
            ) : (
              <>
                <Button sx={{ color: "white" }}>VPS</Button>
                <Button sx={{ color: "white" }}>Domain</Button>
                <Button sx={{ color: "white" }}>Pricings</Button>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
