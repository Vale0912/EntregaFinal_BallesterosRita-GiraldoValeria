import React, { createContext, useReducer, useMemo, useEffect } from "react";

const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_THEME: "SET_THEME",
};

// Estado inicial del contexto
export const initialState = { theme: "light", data: [] };

// Reducer para manejar las acciones y actualizar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Creamos el contexto
export const ContextGlobal = createContext(initialState);

// Proveedor del contexto que envuelve la aplicación
export const ContextProvider = ({ children }) => {
  // Utilizamos useReducer para gestionar el estado de manera más compleja
  const [state, dispatch] = useReducer(reducer, initialState);

  // Creamos un objeto con las acciones disponibles para el consumidor del contexto
  const contextValue = useMemo(() => {
    const toggleTheme = () => {
      // Cambiamos el tema de claro a oscuro y viceversa
      dispatch({
        type: actionTypes.SET_THEME,
        payload: state.theme === "light" ? "dark" : "light",
      });
    };

    return {
      state,
      dispatch,
      toggleTheme,
      actionTypes, // Proporcionamos los tipos de acciones para que el consumidor pueda usarlos
    };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
