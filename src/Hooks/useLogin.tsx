import React from "react"

// Axios configuration
import api from "../api/api-axios"

// Add logged user data to Local Storage.
import { authContext } from "../context/authContext"

// Hook to access navigation object
import { useNavigate } from "react-router-dom"

// Type User
import { UserLoginType } from "../types/user.type"

// Alert
import Swal from "sweetalert2"

function useLogin(params: string) {
  const navigate = useNavigate()
  const { setLoggedInUser } = React.useContext(authContext)
  const [check, setCheck] = React.useState<boolean>(false)
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

  const handleCheckbox = () => {
    setCheck(!check)
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    try {
      const response = await api.post<UserLoginType>(params, status)

      setLoggedInUser({ ...response.data })

      localStorage.setItem("loggedInUser", JSON.stringify({ ...response.data }))

      navigate("/home")
    } catch (err: any) {
      Swal.fire({
        title: "Woww! 🤭",
        text: err.response.data.msg,
        icon: "error",
        confirmButtonColor: "#5238ed",
        confirmButtonText: "Try again",
      })
      setStatus({
        email: "",
        password: "",
      })
    }
  }

  return [handleChange, handleSubmit, status, handleCheckbox, check] as const
}

export default useLogin
