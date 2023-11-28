import { useEffect, useState } from 'react'
import './index.scss'
import Storage from 'local-storage'
import LoginEffect from '../../components/Functions/LoginEffect'
import HeaderLogin from '../../components/LoginComponents/HeaderLogin'
import TaskContainer from '../../components/TaskContainer'
import { ListTaksFromUserId } from '../../api/tarefas'
import ModalTask from '../../components/Modals/ModalTask'

const HomePage = () => {
   const [name, setName] = useState('Carregando...')
   const [tarefas, setTarefas] = useState([])
   const [modalVisible, setModalVisible] = useState(false)
   const [result, setResult] = useState('')

   LoginEffect()

   const UserInfo = () => {
      const user = Storage('usuario-logado').data
      setName(user.nome)
   }

   async function ListarTasks() {
      try {
         const resp = await ListTaksFromUserId(Storage('usuario-logado').data.id)

         setResult("Ultimas Anotações")
         setTarefas(resp)
      } catch (err) {
         setResult("Nenhuma Task foi adicionada")
      }
   }



   useEffect(() => {
      ListarTasks()
      UserInfo()
   }, [])


   return (
      <div className="home-container">
         <HeaderLogin />
         <main className="content-main">
            <div className="txt-container">
               <h1>Olá, {name}</h1>
            </div>

            <section className="tasks-container">
               <div className='hdr-tasks'>
                  <p>{result}</p>
                  <button onClick={() => setModalVisible(true)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M6.25 26.25C5.5625 26.25 4.97417 26.0054 4.485 25.5163C3.99583 25.0271 3.75083 24.4383 3.75 23.75V6.25C3.75 5.5625 3.995 4.97417 4.485 4.485C4.975 3.99583 5.56333 3.75083 6.25 3.75H13.75V6.25H6.25V23.75H23.75V16.25H26.25V23.75C26.25 24.4375 26.0054 25.0263 25.5163 25.5163C25.0271 26.0063 24.4383 26.2508 23.75 26.25H6.25ZM20 13.75V10H16.25V7.5H20V3.75H22.5V7.5H26.25V10H22.5V13.75H20Z" fill="white" />
                     </svg>
                  </button>
               </div>
               <section className="content-task">
                  {tarefas.map(item =>
                     <TaskContainer item={item} />
                  )}
               </section>
            </section>
         </main>
         {modalVisible &&
            <ModalTask onClose={() => setModalVisible(false)} />
         }
      </div>
   )
}

export default HomePage