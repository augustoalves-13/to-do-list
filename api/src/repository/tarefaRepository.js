import con from "./connection.js"

export async function NewTask(task){
   const command = 
   `
   insert into tb_tarefa ( id_usuario, nm_titulo  , ds_conteudo)
                values( ? , ? , ? );
   `

   const resp = await con.query(command , [ task.idUser , task.titulo , task.conteudo])
   const info = resp[0]
   task.id = info.insertId
   
   return task
}

export async function ListAllTasks(){
   const command = 
   `
      select id_tarefa    id,
             nm_titulo    titulo,
             ds_conteudo  conteudo,
             data_tarefa  data 
        from tb_tarefa          
   `

   const [lines] = await con.query(command)
   return lines
}