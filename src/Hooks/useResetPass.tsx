import React from "react"
import api from "../api/api-axios"

// Hook to access navigation object
import { useNavigate } from "react-router-dom"

// Alert library
import Swal from "sweetalert2"

function useResetPass() {
  const navigate = useNavigate()
  const [status, setStatus] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
      await api.post("/password-reset", status)

      navigate("/home")

      setStatus({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      Swal.fire({
        icon: "success",
        title: "Uhuuu! 🙌",
        text: "Your password has been successfully changed.",
        showConfirmButton: false,
        timer: 1500,
      })
    } catch (err: any) {
      Swal.fire({
        title: "Woww! 🤭",
        text: err.response.data.msg,
        icon: "error",
        confirmButtonColor: "#5238ed",
        confirmButtonText: "Try again",
      })
    }
  }

  return [handleChange, handleSubmit, status] as const
}

export default useResetPass
