import LoadingBar from 'react-top-loading-bar'
import HeaderLogin from '../../components/LoginComponents/HeaderLogin'
import BoxLogin from '../../components/LoginComponents/Login'
import './index.scss'
import { useEffect, useRef } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

const LoginPage = () => {

   const ref = useRef()
   const navigate = useNavigate()

   const AutoLogin = () => {
      if(Storage("usuario-logado")){
         navigate('/home')
      }
   }

   useEffect(() => {
      AutoLogin()
   }, [])

   return (
      <div className="main-container">
         <LoadingBar height={4} className='loader' color='#f11946' ref={ref} />
         <HeaderLogin />
         <BoxLogin referencia={ref} />
         <Footer/>
      </div>
   )
}

export default LoginPage