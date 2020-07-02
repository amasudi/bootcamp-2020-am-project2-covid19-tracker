import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";
export const CountryFlag = () => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  let { data, handleActions } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState(false);
  const [flagImg, setFlagImg] = useState(null);
  useEffect(() => {
    if (data.country !== "" && isEmpty(data.countryData)) {
      setLoading(true);
      const fetchData = async (country) => {
        let response = await fetch(
          `https://disease.sh/v2/countries/${country}`
        );
        let data = await response.json();
        handleActions("SET_COUNTRY", { countryData: data });
        setFlagImg(<img alt={country} src={data.countryInfo.flag} />);
        setLoading(false);
      };
      fetchData(data.country);
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
