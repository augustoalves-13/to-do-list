import { useEffect } from "react"
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom"

const LoginEffect = () => {

   const navigate = useNavigate()
   
   useEffect(()=>{
      if(!Storage("usuario-logado")){
         navigate('/')
      }
   },[])
}

export default LoginEffect