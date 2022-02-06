import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthContextComponent } from "./context/authContext"

import PrivateRoutes from "./PrivateRouter/PrivateRoutes"

// Routes
import { Login } from "./components/login"
import { Home } from "./components/home"
import { Profile } from "./components/profile"

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthContextComponent>
    </BrowserRouter>
  )
}
