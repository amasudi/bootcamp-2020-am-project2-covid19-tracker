import React, { useContext } from "react";
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
import { GlobalContext } from "../context/GlobalContext";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: "10px",
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
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  let {
    data: { regionalData },
  } = useContext(GlobalContext);
  const classes = useStyles();
  if (isEmpty(regionalData)) {
    return <Typography>...Loading</Typography>;
  } else {
    return (
      <Paper elevation={3} style={{ padding: "10px", background: "#ececec" }}>
        <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
          Regional Summary
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          <b>Updated On:</b> {new Date(regionalData[0].updated).toString()}
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Region</StyledTableCell>
                <StyledTableCell align="right">Tests</StyledTableCell>
                <StyledTableCell align="right">Infected</StyledTableCell>
                <StyledTableCell align="right">Active</StyledTableCell>
                <StyledTableCell align="right">Deaths</StyledTableCell>
                <StyledTableCell align="right">Recovered</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {regionalData.map((row, ind) => (
                <StyledTableRow key={ind}>
                  <StyledTableCell component="td" scope="row">
                    <b>{row.continent}</b>
                    <br />
                    <b>Population:</b>{" "}
                    <CountUp
                      start={0}
                      end={row.population}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={row.tests}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={row.cases}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={row.active}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={row.deaths}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={row.recovered}
                      separator=","
                      style={{ fontSize: "13px" }}
                    />
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
