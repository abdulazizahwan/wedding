import React from "react"

import { initialState,reducer } from "./reducer"

export const LangContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const LangProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <LangContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </LangContext.Provider>
  )
}