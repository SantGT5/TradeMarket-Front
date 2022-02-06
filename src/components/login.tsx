// useLogin Hooks && logic
import useLogin from "../Hooks/useLogin"
import { Input } from "../global/input"
import loginImg from "../assets/images/login-img.svg"

export const Login = () => {
  const [handleChange, handleSubmit, status, handleCheckbox, check] =
    useLogin("/login")

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex center login-img-container">
        <div>
          <img className="login-img" src={loginImg} alt="Login img" />
        </div>
        <div className="login-container">
          <h1 className="title">Login</h1>
          <span className="login-sub-title">
            See your growth and get consulting support!
          </span>
          <Input
            placeholder="mail@ortex.com"
            label="Email*"
            classNameLabel="login-label-email"
            classNameInput="login-input"
            type="text"
            onChange={handleChange}
            value={status.email}
            name="email"
          />
          <Input
            placeholder="Min. 8 character"
            label="Password*"
            classNameLabel="login-label-pass"
            classNameInput="login-input"
            type={check ? "text" : "password"}
            onChange={handleChange}
            value={status.password}
            name="password"
          />
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="show-pass"
              id="check-id"
              onChange={handleCheckbox}
            />
            <label htmlFor="check-id">Show password</label>
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </div>
        <span className="logo-fixed-position">ORTEX</span>
      </div>
    </form>
  )
}
