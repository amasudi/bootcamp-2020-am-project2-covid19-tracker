import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { CountryFlag } from "./CountryFlag";
import { CountryChart } from "./CountryChart";
import { CountryDetails } from "./CountryDetails";

export const CountryWiseDetails = () => {
  return (
    <Paper elevation={3} style={{ padding: "10px", background: "#ececec" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h3"
            style={{ textAlign: "center" }}
          >
            Country Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CountryFlag />
        </Grid>
        <Grid item xs={12} sm={9}>
          <CountryChart />
        </Grid>
        <Grid item xs={12}>
          <CountryDetails />
        </Grid>
      </Grid>
    </Paper>
  );
};
