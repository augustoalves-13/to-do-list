import con from "./connection.js"

export async function RegisterUser(user){
   const command = 
   `
   insert into tb_usuario (nm_usuario, ds_email, ds_senha)
               values(? , ? , ?)
   `

   const resp = await con.query(command , [ user.nome , user.email , user.senha ])
   const info = resp[0]
   user.id = info.insertId

   return user
}

export async function LoginUser(email , senha){
   const command = 
   `
      select id_usuario    id,
             nm_usuario    nome,
             ds_email      email,
             ds_senha      senha
        from tb_usuario
       where ds_email   =  ?
         and ds_senha   =  ?
   `

   const [lines] = await con.query(command, [ email, senha ])


   return lines[0]
}