import React from "react"

import AuthenticationApp from "./AuthenticationApp";
import UnAuthenticationApp from "./UnAuthenticationApp";
import useContext from  "./hook/useContext"

import "./assets/app.css"
function App() {

  const [token] = useContext()

  if (token) {
    return <AuthenticationApp />
  }
  else {
    return <UnAuthenticationApp />
  }
}

export default App;