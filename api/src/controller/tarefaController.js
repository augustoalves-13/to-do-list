import { Router } from 'express'
import { ListAllTasks, NewTask } from '../repository/tarefaRepository.js'

const server = Router()

server.post('/user/tarefa/nova', async (req, resp) => {
   try {
      
      const request = req.body

      const response = await NewTask(request)
      resp.send(response)

   } catch (err) {
      resp.status(401).send({
         erro: err.message
      })
   }
})

server.get("/user/tarefas" , async(req , resp)=>{
   try {

      const response = await ListAllTasks()
      resp.send(response)

   } catch (err) {
      resp.status(404).send({
         erro: err.message
      })
   }
})

export default server