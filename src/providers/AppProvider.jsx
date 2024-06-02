import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  /* 
    <<useReducer Hook >>
    state: global state
    dispatch: function to update the global state (send actions to modify the state)
    reducer: function that takes the current state and an action and returns a new state
    initialState: initial state
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
   */
  return (
    <AppContext.Provider
      value={{ budget: state.budget, products: state.products, showList: state.showList, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
