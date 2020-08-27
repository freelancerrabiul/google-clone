
import React, { createContext, useContext, useReducer }from "react";

//preparing the data layer
export const StateContext = createContext();

//higher order component
export const StateProvider = ({ reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
       {children}
    </StateContext.Provider>
);
//This is a hook which allow us pull infor: from the data layer
export const useStateValue = () => useContext(StateContext);

