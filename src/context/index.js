import React from "react";
import { StateProvider, useSelector, useDispatch } from "use-hook-kits";
import stores from "./stores";
import reducer from "./reducers";
import * as actions from "./actions";

const keySelector = {
  dHeight: "dHeight",
};

const Stores = ({ children }) => (
  <StateProvider reducer={reducer} stores={stores}>
    {children}
  </StateProvider>
);

export {
  Stores,
  StateProvider,
  useDispatch,
  actions,
  useSelector,
  keySelector,
};
