import React, {createContext, useContext, useReducer} from "react";

//prepare the datalayer..
export const StateContext = createContext();

//Higher order component to wrap our App.js
export const StateProvider = ({reducer, initialState, children}) =>
(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

//pulling any data from the data layer
export const useStateValue = () => useContext(StateContext);