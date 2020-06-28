import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Card,
} from "@material-ui/core";
import CountUp from "react-countup";

import coronaLogo from "../covid-logo.png";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  region,
  population,
  tests,
  cases,
  active,
  critical,
  deaths,
  recovered
) {
  return {
    region,
    population,
    tests,
    cases,
    active,
    critical,
    deaths,
    recovered,
  };
}

const rows = [
  createData(
    "North America",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
  createData(
    "South America",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
  createData(
    "Europe",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
  createData(
    "Asia",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
  createData(
    "Africa",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
  createData(
    "Australia/Oceania",
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565,
    12511565
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const GlobalSituation = () => {
  const classes = useStyles();
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
          <Paper elevation={3} style={{ padding: "10px" }}>
            <Typography
              variant="h3"
              component="h3"
              style={{ textAlign: "center" }}
            >
              Regional Summary
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Region</StyledTableCell>
                    <StyledTableCell align="right">Tests</StyledTableCell>
                    <StyledTableCell align="right">Cases</StyledTableCell>
                    <StyledTableCell align="right">Active</StyledTableCell>
                    <StyledTableCell align="right">Deaths</StyledTableCell>
                    <StyledTableCell align="right">Recovered</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, ind) => (
                    <StyledTableRow key={ind}>
                      <StyledTableCell component="th" scope="row">
                        <b>{row.region}</b>
                        <br />
                        <b>Population:</b>{" "}
                        <CountUp start={0} end={row.population} separator="," />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <CountUp start={0} end={row.tests} separator="," />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <CountUp start={0} end={row.cases} separator="," />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <CountUp start={0} end={row.active} separator="," />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <CountUp start={0} end={row.deaths} separator="," />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <CountUp start={0} end={row.recovered} separator="," />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            <Typography
              variant="h3"
              component="h3"
              style={{ textAlign: "center" }}
            >
              Global Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Population</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Tests</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Cases</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Active</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Deaths</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    <b>Recovered</b>
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <CountUp start={0} end={123456} separator="," />
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
