export const AppReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      return { data: { ...state.data, country: action.payload.country } };
    case "SET_REGIONAL":
      return {
        data: { ...state.data, regionalData: action.payload.regionalData },
      };
    default:
      return state;
  }
};
