import axios from 'axios'
import { API_URL } from './config'

const api = axios.create({
   baseURL: API_URL
})

export async function Login(email, senha){
   const r = await api.post('user/login' , {
      email:email,
      senha:senha
   })

   return r
}

export async function Cadastro(nome, email, senha){
   const r = await api.post('user/cadastro' , {
      nome:nome,
      email:email,
      senha: senha
   })

   return r
}