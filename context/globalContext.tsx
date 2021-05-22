import React, { createContext, useReducer, useContext, Dispatch } from "react";

import { GlobalReducer } from "./reducer/globalReducer";

import { IGlobalState, initialGlobalState } from "./reducer/globalState";

interface IGlobalContextInterface {
  state: IGlobalState;
  dispatch: Dispatch<any>;
}

let GlobalContext = createContext<IGlobalContextInterface | null>(null);

function GlobalProvider(props: any) {
  const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
