import { Router } from 'express'
import { ListUsers, LoginAdmin, RegisterAdmin } from '../repository/adminRepository.js'

const server = Router()

server.post('/admin/cadastro', async (req, resp) => {
   try {

      const request = req.body

      
      if (!request.nome)
         throw new Error('Informe o seu nome')

      if (!request.email)
         throw new Error('Informe o seu e-mail')

      if (!request.senha || request.senha.length < 8)
         throw new Error('A senha deve conter no mínimo 8 caracteres')

      const response = await RegisterAdmin(request)
      resp.send(response)

   } catch (err) {
      resp.status(401).send({
         erro: err.message
      })
   }
})

server.post('/admin/login', async (req, resp) => {
   try {

      const { email, senha } = req.body

      const response = await LoginAdmin(email, senha)

      if(!response){
         throw new Error("Credenciais Inválidas")
      } else{
         resp.send(response)
      }

   } catch (err) {
      resp.status(401).send({
         erro:err.message
      })
   }
})

server.get('/admin/users' , async(req , resp) =>{
   try {

      const response = await ListUsers()
      resp.send(response)
      
   } catch (err) {
      resp.status(404).send({
         erro: err.message
      })
   }
})

export default server