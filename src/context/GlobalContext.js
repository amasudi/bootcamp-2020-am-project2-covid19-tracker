import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  data: {
    country: "",
    regionalData: {},
    countryData: {},
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  let handleActions = (type, transObj) => {
    switch (type) {
      case "CHANGE_COUNTRY":
        dispatch({
          type: type,
          payload: { country: transObj.country },
        });
        break;
      case "SET_REGIONAL":
        dispatch({
          type: type,
          payload: { regionalData: transObj.regionalData },
        });
        break;
      case "SET_COUNTRY":
        dispatch({
          type: type,
          payload: { countryData: transObj.countryData },
        });
      default:
    }
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, handleActions }}>
      {children}
    </GlobalContext.Provider>
  );
};
