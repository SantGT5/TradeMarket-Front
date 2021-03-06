import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { authContext } from "../context/authContext"

export default function PrivateRoutes() {
  const context = React.useContext(authContext)!

  return <>{context.loggedInUser.token ? <Outlet /> : <Navigate to="/" />}</>
}
