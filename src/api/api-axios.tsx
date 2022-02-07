import axios from "axios"

// Axios URLs
const apis = {
  development: "http://localhost:4000",
  production: "https://trade-market-ortex.herokuapp.com",
}

// Configure URL as default.
const api = axios.create({
  baseURL: apis["production"],
})

// Headers configuration before each request.
api.interceptors.request.use((config) => {
  // Checking if we have user data
  const storedUser = localStorage.getItem("loggedInUser")
  const loggedInUser = JSON.parse(storedUser || '""')

  // if user is logged, will be sending User Token to authorization.
  if (loggedInUser.token) {
    config.headers = {
      Authorization: `Bearer ${loggedInUser.token}`,
    }
  }

  return config
})

export default api
