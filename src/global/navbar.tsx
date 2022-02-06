import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="flex container-navbar">
      <Link to="/home" className="nav-logo">
        <h1 className="nav-logo center">ORTEX</h1>
      </Link>

      <div className="flex flex-end align-item">
        <Link to="/profile" className="nav-profile">
          Profile
        </Link>
        <Link to="/home" className="nav-profile">
          Home
        </Link>
      </div>
    </nav>
  )
}
