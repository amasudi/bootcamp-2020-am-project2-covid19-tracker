import React, { useState, useEffect } from "react";
import { Paper, Grid, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";
import { Line } from "react-chartjs-2";

export const GlobalSummary = () => {
  const [globalSummaryData, setGlobalSummaryData] = useState([]);
  const [loadingSummaryData, setLoadingSummaryData] = useState(true);
  const [globalGraphData, setGlobalGraphData] = useState([]);
  const [loadingGraphData, setLoadingGraphData] = useState(true);
  useEffect(() => {
    const fetchSummaryData = async () => {
      let response = await fetch("https://disease.sh/v2/all");
      let data = await response.json();
      setGlobalSummaryData(data);
      setLoadingSummaryData(false);
    };
    fetchSummaryData();
    const fetchGraphData = async () => {
      let response = await fetch(
        "https://disease.sh/v2/historical/all?lastdays=all"
      );
      let data = await response.json();
      console.log(data);
      setGlobalGraphData(data);
      setLoadingGraphData(false);
    };
    fetchGraphData();
  }, []);
  if (loadingSummaryData || loadingGraphData) {
    return <Typography>Loading...</Typography>;
  } else {
    return (
      <Paper elevation={3} style={{ padding: "10px", background: "#ececec" }}>
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
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
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
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
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
                <b>Infected</b>
              </Typography>
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
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
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
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
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
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
              <Typography style={{ textAlign: "center", fontSize: "13px" }}>
                <CountUp
                  start={0}
                  end={globalSummaryData.recovered}
                  separator=","
                />
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Line
              data={{
                labels: Object.keys(globalGraphData.cases),
                datasets: [
                  {
                    data: Object.values(globalGraphData.cases),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: "true",
                  },
                  {
                    data: Object.values(globalGraphData.recovered),
                    label: "Recovered",
                    borderColor: "green",
                    fill: "true",
                  },
                  {
                    data: Object.values(globalGraphData.deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rbga(255, 0, 0, 0.5)",
                    fill: "true",
                  },
                ],
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
};
