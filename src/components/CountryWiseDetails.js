import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import { CountryFlag } from "./CountryFlag";
import { CountryChart } from "./CountryChart";
import { CountryDetails } from "./CountryDetails";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CountryWiseDetails = () => {
  const { country, handleActions } = useContext(GlobalContext);
  const classes = useStyles();
  const [regionalData, setRegionalData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const handleChange = (event) => {
    handleChangeCountry(event.target.value);
  };
  let handleChangeCountry = (changedCountry) => {
    handleActions("CHANGE_COUNTRY", { country: changedCountry });
  };
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
            <FormControl xs={12} className={classes.formControl}>
              <NativeSelect xs={12} value={country} onChange={handleChange}>
                <option value="">---Select Country---</option>
                {regionalData.map((row, ind) => (
                  <optgroup label={row.continent} key={ind}>
                    {row.countries.map((countryVal, i) => (
                      <option value={countryVal} key={i}>
                        {countryVal}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </NativeSelect>
            </FormControl>
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
  }
};
