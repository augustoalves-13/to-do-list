import con from "./connection.js"

export async function RegisterAdmin(admin){
   const command = 
   `
   insert into tb_admin (nm_admin, ds_email, ds_senha)
               values(? , ? , ?)
   `

   const resp = await con.query(command , [ admin.nome , admin.email , admin.senha ])
   const info = resp[0]
   admin.id = info.insertId

   return admin
}

export async function LoginAdmin(email , senha){
   const command = 
   `
      select id_admin      id,
             nm_admin      nome,
             ds_email      email
        from tb_admin
       where ds_email   =  ?
         and ds_senha   =  ?
   `

   const [lines] = await con.query(command, [ email, senha ])


   return lines[0]
}

export async function ListUsers(){
   const command = 
   `
   select id_usuario    id,
          nm_usuario    nome,
          ds_email      senha
     from tb_usuario 
   `

   const [lines] = await con.query(command)
   return lines
}