import e, { Router } from 'express'
import { RegisterUser, LoginUser } from '../repository/userRepository.js'

const server = Router()

server.post('/user/cadastro', async (req, resp) => {
   try {

      const request = req.body


      if (!request.senha && !request.nome && !request.email)
         throw new Error('Informe os campos abaixo')

      if (!request.nome)
         throw new Error('Informe o seu nome')

      if (!request.email)
         throw new Error('Informe o seu e-mail')

      if (!request.senha || request.senha.length < 8)
         throw new Error('A senha deve conter no mínimo 8 caracteres')

      const response = await RegisterUser(request)
      resp.send(response)

   } catch (err) {
      resp.status(401).send({
         erro: err.message
      })
   }
})

server.post('/user/login', async (req, resp) => {
   try {

      const { email, senha } = req.body

      const response = await LoginUser(email, senha)

     

      if (!response) {
         throw new Error("Credenciais Inválidas")
      } else {
         resp.send(response)
      }

   } catch (err) {
      resp.status(401).send({
         erro: err.message
      })
   }
})

export default server