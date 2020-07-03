import React, { useContext } from "react";
import { Paper, Card, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import { CountryFlag } from "./CountryFlag";
import { GlobalContext } from "../context/GlobalContext";
import { Bar } from "react-chartjs-2";

export const CountryWiseDetails = () => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  const {
    data: { country, countryData },
  } = useContext(GlobalContext);
  if (country === "") {
    return null;
  } else {
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
            {!isEmpty(countryData) && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                    REGION: ({countryData.continent})
                  </Typography>
                  <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                    COUNTRY: {countryData.country}
                  </Typography>
                  <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                    TOTAL POPULATION:{" "}
                    <CountUp
                      start={0}
                      end={countryData.population}
                      separator=","
                    />
                  </Typography>
                  <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                    <b>Last Updated On:</b>{" "}
                    {new Date(countryData.updated).toString()}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Tests</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.tests}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Infected</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.cases}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Active</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.active}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Critical</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.critical}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Deaths</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.deaths}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Recovered</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.recovered}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Tests/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.testsPerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Infected/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.casesPerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Active/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.activePerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Critical/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.criticalPerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Deaths/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.deathsPerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Recovered/Million</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.recoveredPerOneMillion}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Cases Reported Today</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.todayCases}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Deaths Today</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.todayDeaths}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }}>
                      <b>Total Recovered Today</b>
                    </Typography>
                    <Typography
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <CountUp
                        start={0}
                        end={countryData.todayRecovered}
                        separator=","
                      />
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Bar
              data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                  {
                    label: "People",
                    backgroundColor: [
                      "rgba(0,0,255,0.5)",
                      "rgba(0,255,0,0.5)",
                      "rgba(255,0,0,0.5)",
                    ],
                    data: [
                      countryData.cases,
                      countryData.recovered,
                      countryData.deaths,
                    ],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: `Current state in ${countryData.country}`,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Bar
              data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                  {
                    label: "People",
                    backgroundColor: [
                      "rgba(0,0,255,0.5)",
                      "rgba(0,255,0,0.5)",
                      "rgba(255,0,0,0.5)",
                    ],
                    data: [
                      countryData.todayCases,
                      countryData.todayRecovered,
                      countryData.todayDeaths,
                    ],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: `Today's position in ${countryData.country}`,
                },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
};
