import React, { useState, useEffect } from "react";
import { Paper, Grid, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";

export const GlobalSummary = () => {
  const [globalSummaryData, setGlobalSummaryData] = useState([]);
  const [loadingSummaryData, setLoadingSummaryData] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://disease.sh/v2/all");
      let data = await response.json();
      setGlobalSummaryData(data);
      setLoadingSummaryData(false);
    };
    fetchData();
  }, []);
  if (loadingSummaryData) {
    return <Typography>Loading...</Typography>;
  } else {
    return (
      <Paper elevation={3} style={{ padding: "10px" }}>
        <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
          Global Summary
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          <b>Updated On:</b> {new Date(globalSummaryData.updated).toString()}
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
                <CountUp
                  start={0}
                  end={globalSummaryData.population}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={globalSummaryData.tests}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={globalSummaryData.cases}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={globalSummaryData.active}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={globalSummaryData.deaths}
                  separator=","
                />
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
                <CountUp
                  start={0}
                  end={globalSummaryData.recovered}
                  separator=","
                />
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    );
  }
};
