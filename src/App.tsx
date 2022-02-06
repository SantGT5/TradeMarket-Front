import "./style.scss"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { AuthContextComponent } from "./context/authContext"

import PrivateRoutes from "./PrivateRouter/PrivateRoutes"

// Routes
import { Login } from "./components/login"
import { Home } from "./components/home"

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
        <Link to="/home">test</Link>
      </AuthContextComponent>
    </BrowserRouter>
  )
}
