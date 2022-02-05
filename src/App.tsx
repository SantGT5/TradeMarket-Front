import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthContextComponent } from "./context/authContext"

import { Login } from "./components/login"
import { Home } from "./components/home"

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthContextComponent>
    </BrowserRouter>
  )
}
