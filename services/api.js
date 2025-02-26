import { axios } from "axios"

const api = axios.create({
  baseURL:"https://api-receitas-pi.vercel.app"
})

export default api