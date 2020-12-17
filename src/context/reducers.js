import Types from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_DHEIGHT:
      return {
        ...state,
        dHeight: payload,
      };
    default:
      return state;
  }
};

export default reducer;
