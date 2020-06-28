import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography varient="title" color="inherit">
            Bootcamp 2020 - Project2: COVID-19 Tracker
          </Typography>
          <IconButton
            href="https://github.com/amasudi/bootcamp-2020-am-project2-covid19-tracker"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    </div>
  );
};
