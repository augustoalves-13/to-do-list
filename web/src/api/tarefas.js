import axios from 'axios'
import { API_URL } from './config'

const api = axios.create({
   baseURL: API_URL
})

export async function ListTask(){
   const r = await api.get("user/tarefas")
   return r.data
}

export async function CadastrarTarefa(id, titulo, conteudo , data){
   const r = await api.post('user/tarefas/nova' , {
      idUser:id,
      titulo:titulo,
      conteudo:conteudo,
      entrega:data
   })
   return r
}

export async function ListTaksFromUserId(id){
   const r = await api.get(`user/${id}/tarefas`)
   return r.data
}