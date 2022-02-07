import React from "react"

// Axios configuration
import api from "../api/api-axios"

// Hook to access navigation object
import { useNavigate } from "react-router-dom"

// Type
import { ResetPass } from "../types/resetpass.type"

// Alert library
import Swal from "sweetalert2"

function useResetPass() {
  const navigate = useNavigate()
  const [checkbox, SetCheckbox] = React.useState(false)
  const [status, setStatus] = React.useState<ResetPass>({
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

  const handleCheckbox = () => {
    SetCheckbox(!checkbox)
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    try {
      await api.post<ResetPass>("/password-reset", status)

      navigate("/")

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

  return [handleChange, handleSubmit, handleCheckbox, status, checkbox] as const
}

export default useResetPass
