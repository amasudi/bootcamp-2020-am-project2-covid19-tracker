import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";
export const CountryFlag = () => {
  let { data, handleActions } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState(false);
  const [flagImg, setFlagImg] = useState(null);
  useEffect(() => {
    if (data.country !== "") {
      setLoading(true);
      const fetchData = async () => {
        let response = await fetch(
          `https://disease.sh/v2/countries/${data.country}`
        );
        let data = await response.json();
        handleActions("SET_COUNTRY", { countryData: data });
        setFlagImg(<img alt={data.country} src={data.countryInfo.flag} />);
        setLoading(false);
      };
      fetchData();
    }
  }, [data, handleActions]);
  if (data.country === "") {
    return null;
  } else if (isLoading) {
    return <Typography>...Loading</Typography>;
  } else {
    return flagImg;
  }
};
