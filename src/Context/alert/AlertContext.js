import { createContext, useContext, useReducer } from "react";

import alertReducer from "./alertReducer";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });
  };

  setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => {
  return useContext(AlertContext);
};

export { useAlertContext, AlertProvider };
