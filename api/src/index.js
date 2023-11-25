import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import userController from './controller/userController.js'
import adminController from './controller/adminController.js'
import tarefaController from './controller/tarefaController.js'

const api = express()

api.use(express.json())
api.use(cors())

//endpoints
api.use(tarefaController)
api.use(adminController)
api.use(userController)


api.listen(process.env.MYSQL_PORT ,
            ()=> console.log(`API ONLINE NA PORTA: ${process.env.MYSQL_PORT}`))