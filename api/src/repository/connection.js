import mysql2 from 'mysql2/promise'

let con = await mysql2.createConnection({
   host: process.env.MYSQL_HOST,
   database: process.env.MYSQL_DB,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PWD
})


console.log('CONECTADO AO BANCO DE DADOS =D')

export default con