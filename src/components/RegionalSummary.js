import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import CountUp from "react-countup";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const RegionalSummary = () => {
  const classes = useStyles();
  const [regionalData, setRegionalData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://disease.sh/v2/continents");
      let data = await response.json();
      setRegionalData(data);
      setLoadingData(false);
    };
    fetchData();
  }, []);
  if (loadingData) {
    return <Typography>Loading...</Typography>;
  } else {
    return (
      <Paper elevation={3} style={{ padding: "10px" }}>
        <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
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
              {regionalData.map((row, ind) => (
                <StyledTableRow key={ind}>
                  <StyledTableCell component="th" scope="row">
                    <b>{row.continent}</b>
                    <br />
                    <b>Population:</b>
                    <br />
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
    );
  }
};
