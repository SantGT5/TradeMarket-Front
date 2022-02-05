import React from "react"
import api from "../api/api-axios"
import { authContext } from "../context/authContext"
import { useNavigate } from "react-router-dom"

type UserLogin = {
  email: string
  password: string
}

export const Login = () => {
  const { setLoggedInUser } = React.useContext(authContext)
  const navigate = useNavigate()
  const [status, setStatus] = React.useState<UserLogin>({
    email: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({
      ...status,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  console.log(status)

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    try {
      const response = await api.post<UserLogin>("/login", status)
      console.log(response.data)

      setLoggedInUser({ ...response.data })

      localStorage.setItem("loggedInUser", JSON.stringify({ ...response.data }))

      navigate("/home")
    } catch (err: any) {
      console.log(err.response)
    }
  }

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
