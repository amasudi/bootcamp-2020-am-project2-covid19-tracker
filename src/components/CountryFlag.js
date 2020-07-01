import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";
export const CountryFlag = () => {
  let {
    data: { country },
  } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState(false);
  const [flagImg, setFlagImg] = useState(null);
  useEffect(() => {
    if (country !== "") {
      setLoading(true);
      const fetchData = async () => {
        let response = await fetch(
          `https://disease.sh/v2/countries/${country}`
        );
        let data = await response.json();
        setFlagImg(<img alt={country} src={data.countryInfo.flag} />);
        setLoading(false);
      };
      fetchData();
    }
  }, [country]);
  if (country === "") {
    return null;
  } else if (isLoading) {
    return <Typography>...Loading</Typography>;
  } else {
    return flagImg;
  }
};
