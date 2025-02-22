import { axios } from "axios"

const api = axios.create({
  baseURL:"https://-apireceitas-pi.vercel.app/receitas/todas"
})

export default api