import React from "react"

// Axios configuration
import api from "../api/api-axios"

// Add logged user data to Local Storage.
import { authContext } from "../context/authContext"

// Hook to access navigation object
import { useNavigate } from "react-router-dom"

// Type User
import { UserLoginType } from "../types/user.type"

function useLogin(params: string) {
  const navigate = useNavigate()
  const { setLoggedInUser } = React.useContext(authContext)
  const [status, setStatus] = React.useState<UserLoginType>({
    email: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({
      ...status,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    try {
      const response = await api.post<UserLoginType>(params, status)

      setLoggedInUser({ ...response.data })

      localStorage.setItem("loggedInUser", JSON.stringify({ ...response.data }))

      navigate("/home")
    } catch (err: any) {
      console.log(err.response)
    }
  }

  return [handleChange, handleSubmit, status] as const
}

export default useLogin
