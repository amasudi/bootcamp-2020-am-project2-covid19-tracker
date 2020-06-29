export const AppReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      return { country: action.payload.country };
    default:
      return state;
  }
};
