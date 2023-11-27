import { Router } from 'express'
import { ListAllTasks, ListTaskFromId, NewTask } from '../repository/tarefaRepository.js'

const server = Router()

server.post('/user/tarefas/nova', async (req, resp) => {
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

server.get("/user/:id/tarefas" , async(req, resp) => {
   try {

      const { id } = req.params

      const response = await ListTaskFromId(id)
      resp.send(response)

   } catch (err) {
      resp.status(404).send({
         erro:err.message
      })
   }
})

export default server