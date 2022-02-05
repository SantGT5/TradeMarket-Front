import { Route, Navigate } from "react-router-dom"

function PrivateRoute(props: any) {
  // Getting user logged.
  const storedUser = localStorage.getItem("loggedInUser")

  const loggedInUser = JSON.parse(storedUser || '""')

  const propsClone = { ...props }
  const { component } = propsClone
  const Component = component
  delete propsClone.component

  return (
    <Route
      {...propsClone}
      render={(routeProps: any) => {
        // Protecting routers that request user be logged, for example /profile.

        // Token is request in private routers, if token is not undefined or null user will be redirect to /login path.

        if (loggedInUser.token) {
          return <Component {...routeProps} {...propsClone} />
        } else {
          return (
            <Navigate
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      }}
    />
  )
}

export default PrivateRoute
