// useLogin Hooks && logic
import useLogin from "../Hooks/useLogin"

export const Login = () => {
  const [handleChange, handleSubmit, status] = useLogin("/login")

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={status.email}
          name="email"
        />
        <input
          type="password"
          onChange={handleChange}
          value={status.password}
          name="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
