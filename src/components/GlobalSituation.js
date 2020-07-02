import React, { useEffect, useContext } from "react";
import { Grid, Typography, FormControl, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RegionalSummary } from "./RegionalSummary";
import { GlobalSummary } from "./GlobalSummary";
import { CountryWiseDetails } from "./CountryWiseDetails";

import { GlobalContext } from "../context/GlobalContext";

import coronaLogo from "../covid-logo.png";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const GlobalSituation = () => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  const { data, handleActions } = useContext(GlobalContext);
  const classes = useStyles();
  //const [regionalData, setRegionalData] = useState([]);
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
      handleActions("SET_REGIONAL", { regionalData: data });
      //setRegionalData(data);
    };
    fetchData();
  }, [handleActions]);
  if (isEmpty(data.regionalData)) {
    return <Typography>...Loading</Typography>;
  } else {
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
          <Grid item xs={12}>
            <FormControl xs={12} className={classes.formControl}>
              <NativeSelect
                xs={12}
                value={data.country}
                onChange={handleChange}
              >
                <option value="">---Select Country---</option>
                {data.regionalData.map((row, ind) => (
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <GlobalSummary />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RegionalSummary />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CountryWiseDetails />
          </Grid>
        </Grid>
      </div>
    );
  }
};
