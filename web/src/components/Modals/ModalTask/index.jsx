import StandartInput from '../../LoginComponents/Input'
import './index.scss'
import gif from '../../../assets/vector-list.png'
import { useState } from 'react'
import { CadastrarTarefa } from '../../../api/tarefas'
import Storage from 'local-storage'
import { toast } from 'react-toastify'

const ModalTask = (props) => {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState('')
   const [date, setDate] = useState("")

   const user = Storage('usuario-logado').data.id

   async function RegisterTask() {
      try {
         const resp = await CadastrarTarefa(user, title, content, date)
         toast.success("Task salva com sucesso")

      } catch (err) {
         toast.error(err.response.data.erro)
      }
   }

   return (
      <div className="modal-container">
         <div className="modal-box">
            <div className='img-container'>
               <img src={gif} />
            </div>
            <div className='content-task'>
               <div className="btn-close">
                  <button onClick={props.onClose}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5459 17.954C19.7572 18.1654 19.876 18.452 19.876 18.7509C19.876 19.0498 19.7572 19.3364 19.5459 19.5478C19.3346 19.7591 19.0479 19.8779 18.749 19.8779C18.4501 19.8779 18.1635 19.7591 17.9521 19.5478L12 13.5937L6.0459 19.5459C5.83455 19.7573 5.54791 19.876 5.24902 19.876C4.95014 19.876 4.66349 19.7573 4.45215 19.5459C4.2408 19.3346 4.12207 19.0479 4.12207 18.749C4.12207 18.4502 4.2408 18.1635 4.45215 17.9522L10.4062 12L4.45402 6.04592C4.24268 5.83457 4.12395 5.54793 4.12395 5.24904C4.12395 4.95016 4.24268 4.66351 4.45402 4.45217C4.66537 4.24082 4.95201 4.12209 5.2509 4.12209C5.54978 4.12209 5.83643 4.24082 6.04777 4.45217L12 10.4062L17.954 4.45123C18.1654 4.23989 18.452 4.12115 18.7509 4.12115C19.0498 4.12115 19.3364 4.23989 19.5478 4.45123C19.7591 4.66258 19.8778 4.94922 19.8778 5.24811C19.8778 5.54699 19.7591 5.83364 19.5478 6.04498L13.5937 12L19.5459 17.954Z" fill="#252525" />
                     </svg>
                  </button>
               </div>
               <div className="container-input">
                  <StandartInput label='Título' value={title} onChangeText={setTitle} />
                  <StandartInput label='Conteúdo' value={content} onChangeText={setContent} />
                  <StandartInput label='Data de entrega' value={date} onChangeText={setDate} />
                  <button onClick={RegisterTask}>Cadastrar</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalTask