import { useEffect, useState, useRef } from "react"
import './index.scss'
import StandartInput from "../Input"
import { Cadastro, Login } from "../../../api/user"
import { toast } from "react-toastify"
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom"

const BoxLogin = (props) => {
   const [select, setSelect] = useState(false)
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [result, setResult] = useState("")

   //cadastro
   const [isEmail, setIsEmail] = useState('')
   const [isSenha, setIsSenha] = useState('')
   const [isName, setIsName] = useState('')
   const [carregando, setCarregando ] = useState(false)

   const navigate = useNavigate()

   const handleBox = () => {
      if (!select) {
         setSelect(true)
         setResult('')
      } else {
         setSelect(false)
      }
   }

   async function LoginUser() {
      props.referencia.current.continuousStart()
      setCarregando(true)

      try {
         const resp = await Login(email, senha)
         Storage('usuario-logado', resp)
         
         setTimeout(() => {
            navigate('/home')
         }, 3000)

      } catch (err) {
         setCarregando(false)
         props.referencia.current.complete()
         setResult(err.response.data.erro)
      }
   }

   async function CadastroUser() {
      try {
         const resp = await Cadastro(isName, isEmail, isSenha)
         toast.success('Usuário Cadastrado, Efetue seu Login')

         setSelect(false)
         setEmail(isEmail)
      } catch (err) {
         toast.error(err.response.data.erro)

         if (err.response.data.erro == 'Informe o seu nome') {

         }
      }
   }

   useEffect(() => {
      async function AutoLogin() {
         if (Storage('usuario-logado')) {
            setEmail(Storage('usuario-logado').data.email)
         } else {
            setEmail("")
         }
      }
      
      AutoLogin()
   }, [])
   
   return (
      <div className="box-login">
         <div className="content">
            <h1>Login</h1>
            <StandartInput label='E-mail' value={email} onChangeText={setEmail} />
            <StandartInput label='Senha' value={senha} onChangeText={setSenha} />
            <button disabled={carregando} onClick={LoginUser} className="btn-effect">Entrar</button>
            <p className="result">{result}</p>
         </div>
         <div className={`box-absolute ${select ? 'register-box' : 'login-box'}`}>
            <h1>Bem vindo <span>de volta</span></h1>
            <div className="btn-container">
               {!select &&
                  <p>Não tem conta? Clique abaixo para criar uma</p>
               }
               {select &&
                  <p>Já tem conta? Efetue seu login clicando abaixo</p>
               }
               <button onClick={handleBox}>{!select && 'Criar conta'} {select && 'Login'}</button>
            </div>
         </div>
         <div className="content">
            <h1>Cadastre-se</h1>
            <StandartInput label='Nome Completo:' value={isName} onChangeText={setIsName} />
            <StandartInput label='E-mail' value={isEmail} onChangeText={setIsEmail} />
            <StandartInput label='Senha' value={isSenha} onChangeText={setIsSenha} />
            <button onClick={CadastroUser} className="btn-effect">Criar Conta</button>
         </div>
      </div>
   )
}

export default BoxLogin