import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  country: "",
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
      default:
    }
  };

  return (
    <GlobalContext.Provider value={{ country: state.country, handleActions }}>
      {children}
    </GlobalContext.Provider>
  );
};
