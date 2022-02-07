// React Icons
import { BiUser } from "react-icons/bi"

// Global input
import { Input } from "../global/input"
import { NavBar } from "../global/navbar"

// Hooks && Logics
import useResetPass from "../Hooks/useResetPass"

export const Profile = () => {
  const [handleChange, handleSubmit, handleCheckbox, status, checkbox] =
    useResetPass()

  return (
    <form onSubmit={handleSubmit}>
      <NavBar />
      <div data-aos="zoom-out-down" data-aos-duration="2000">
        <div className="flex center">
          <BiUser className="icon-profile" />
        </div>
        <div className="center-grid">
          <Input
            label="Current password*"
            type={checkbox ? "text" : "password"}
            placeholder="Your password"
            classNameInput="profile-input"
            classNameLabel="profile-label"
            onChange={handleChange}
            value={status.currentPassword}
            name="currentPassword"
          />
          <Input
            label="New password*"
            type={checkbox ? "text" : "password"}
            placeholder="New password"
            classNameInput="profile-input"
            classNameLabel="profile-label"
            onChange={handleChange}
            value={status.newPassword}
            name="newPassword"
          />
          <Input
            label="Confirm new password*"
            type={checkbox ? "text" : "password"}
            placeholder="Confirm new password"
            classNameInput="profile-input"
            classNameLabel="profile-label"
            onChange={handleChange}
            value={status.confirmPassword}
            name="confirmPassword"
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
          <button className="profile-btn" type="submit">
            Set password
          </button>
        </div>
      </div>
    </form>
  )
}
