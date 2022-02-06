export const NavBar = () => {
  return (
    <nav className="flex container-navbar align-item">
      <h1 className="nav-logo center">ORTEX</h1>
      <div className="flex flex-end">
        <button className="nav-profile">Profile</button>
        <button className="nav-free-trial">Start a free trial</button>
      </div>
    </nav>
  )
}
