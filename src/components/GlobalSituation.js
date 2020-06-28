import React from "react";
import { Grid } from "@material-ui/core";

import { RegionalSummary } from "./RegionalSummary";
import { GlobalSummary } from "./GlobalSummary";

import coronaLogo from "../covid-logo.png";

export const GlobalSituation = () => {
  return (
    <div style={{ margin: "25px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img
            src={coronaLogo}
            alt="COVID-19"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              maxWidth: "90%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RegionalSummary />
        </Grid>
        <Grid item xs={12} sm={6}>
          <GlobalSummary />
        </Grid>
      </Grid>
    </div>
  );
};
